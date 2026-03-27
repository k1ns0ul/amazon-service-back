import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PARSER_CONFIG } from '../config/parser.config'

@Injectable()
export class PuppeteerAdapter {
  private readonly logger = new Logger(PuppeteerAdapter.name)

  constructor(private readonly config: ConfigService) {}

  async login(): Promise<string> {
    const email = this.config.get<string>('AMAZON_EMAIL')
    const password = this.config.get<string>('AMAZON_PASSWORD')
    const proxyHost = this.config.get<string>('PROXY_HOST')
    const proxyPort = this.config.get<string>('PROXY_PORT')
    const proxyUser = this.config.get<string>('PROXY_USER')!
    const proxyPass = this.config.get<string>('PROXY_PASS')!

    if (!email || !password) {
      this.logger.warn('AMAZON_EMAIL or AMAZON_PASSWORD not set — skipping login')
      return ''
    }

    let browser: any = null

    try {
      this.logger.log('Launching browser for login...')

      const puppeteerExtra = require('puppeteer-extra')
      const Stealth = require('puppeteer-extra-plugin-stealth')
      puppeteerExtra.use(Stealth())

      browser = await puppeteerExtra.launch({
        headless: true,
        slowMo: 50,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-blink-features=AutomationControlled',
          '--window-size=1280,900',
          `--proxy-server=${proxyHost}:${proxyPort}`,
        ],
      })

      browser.on('targetcreated', async (target: any) => {
        const page = await target.page()
        if (!page) return
        await page.authenticate({ username: proxyUser, password: proxyPass })
      })

      const page = await browser.newPage()
      await page.authenticate({ username: proxyUser, password: proxyPass })
      await page.setUserAgent(PARSER_CONFIG.userAgents[0])
      await page.setViewport({ width: 1280, height: 900 })

      await page.goto(
        'https://www.amazon.com/ap/signin?' +
          'openid.pape.max_auth_age=0' +
          '&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F' +
          '&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select' +
          '&openid.assoc_handle=usflex' +
          '&openid.mode=checkid_setup' +
          '&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select' +
          '&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0',
        { waitUntil: 'networkidle2', timeout: 30_000 },
      )

      const emailSelector = await Promise.race([
        page.waitForSelector('#ap_email', { visible: true, timeout: 8_000 }).then(() => '#ap_email'),
        page.waitForSelector('#ap_email_login', { visible: true, timeout: 8_000 }).then(() => '#ap_email_login'),
      ])

      await page.click(emailSelector)
      await page.keyboard.type(email, { delay: 120 })

      const continueSelector = await Promise.race([
        page.waitForSelector('#continue', { visible: true, timeout: 5_000 }).then(() => '#continue'),
        page
          .waitForSelector('input[type="submit"]', { visible: true, timeout: 5_000 })
          .then(() => 'input[type="submit"]'),
      ])

      await page.click(continueSelector)
      await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15_000 }).catch(() => {})

      await page.waitForSelector('#ap_password', { visible: true, timeout: 15_000 })
      await page.click('#ap_password')
      await page.keyboard.type(password, { delay: 120 })
      await page.click('#signInSubmit')

      await Promise.race([
        page.waitForSelector('#nav-link-accountList', { timeout: 20_000 }),
        page.waitForSelector('#auth-mfa-otpcode', { timeout: 20_000 }),
        page.waitForSelector('.cvf-widget-input', { timeout: 20_000 }),
      ]).catch(() => {})

      if (await page.$('#auth-mfa-otpcode')) {
        this.logger.warn('OTP required. Waiting 60s...')
        await new Promise((r) => setTimeout(r, 60_000))
      }

      const currentUrl = page.url()

      if (!currentUrl.includes('signin') && !currentUrl.includes('/ap/')) {
        const cookies = await page.cookies()
        const header = cookies.map((c: any) => `${c.name}=${c.value}`).join('; ')
        this.logger.log(`Login successful, got ${cookies.length} cookies`)
        return header
      }

      this.logger.warn(`Login failed. URL: ${currentUrl}`)
      return ''
    } catch (e) {
      this.logger.error(`Login error: ${e.message}`)
      return ''
    } finally {
      if (browser) {
        await browser.close()
        this.logger.log('Browser closed')
      }
    }
  }
}