import { ConfigService } from '@nestjs/config';
export declare class PuppeteerAdapter {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    login(): Promise<string>;
}
