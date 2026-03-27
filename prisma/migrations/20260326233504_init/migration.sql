-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ParseJobType" AS ENUM ('OWN_PRODUCTS', 'COMPETITORS', 'CATEGORY_TRENDS');

-- CreateEnum
CREATE TYPE "ParseJobStatus" AS ENUM ('PENDING', 'RUNNING', 'DONE', 'FAILED');

-- CreateEnum
CREATE TYPE "ParseStatus" AS ENUM ('OK', 'CAPTCHA', 'PARSE_ERROR', 'NETWORK_ERROR');

-- CreateEnum
CREATE TYPE "ProxyStatus" AS ENUM ('UNKNOWN', 'OK', 'BANNED', 'DEAD');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seller_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amazonSellerId" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seller_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "nodeId" TEXT NOT NULL,
    "name" TEXT,
    "lastParsedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parse_jobs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "sellerProfileId" TEXT,
    "type" "ParseJobType" NOT NULL,
    "status" "ParseJobStatus" NOT NULL DEFAULT 'PENDING',
    "productsFound" INTEGER NOT NULL DEFAULT 0,
    "productsOk" INTEGER NOT NULL DEFAULT 0,
    "productsFailed" INTEGER NOT NULL DEFAULT 0,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "durationMs" INTEGER,
    "errorMessage" TEXT,

    CONSTRAINT "parse_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "asin" TEXT NOT NULL,
    "categoryId" TEXT,
    "title" TEXT NOT NULL,
    "sellerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_snapshots" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "parseJobId" TEXT NOT NULL,
    "price" DECIMAL(10,2),
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "rating" DECIMAL(3,2),
    "reviewCount" INTEGER,
    "parseStatus" "ParseStatus" NOT NULL,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "externalId" TEXT,
    "title" TEXT,
    "rating" DECIMAL(3,2),
    "reviewDate" TIMESTAMP(3),
    "rawDateText" TEXT,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proxy_entries" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "username" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "failureCount" INTEGER NOT NULL DEFAULT 0,
    "successCount" INTEGER NOT NULL DEFAULT 0,
    "disabledUntil" TIMESTAMP(3),
    "lastCheckedAt" TIMESTAMP(3),
    "lastStatus" "ProxyStatus" NOT NULL DEFAULT 'UNKNOWN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "proxy_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cookie_sessions" (
    "id" TEXT NOT NULL,
    "cookieHeader" TEXT NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastUsedAt" TIMESTAMP(3),

    CONSTRAINT "cookie_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_apiKey_key" ON "users"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_apiKey_idx" ON "users"("apiKey");

-- CreateIndex
CREATE INDEX "seller_profiles_amazonSellerId_idx" ON "seller_profiles"("amazonSellerId");

-- CreateIndex
CREATE UNIQUE INDEX "seller_profiles_userId_amazonSellerId_key" ON "seller_profiles"("userId", "amazonSellerId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_nodeId_key" ON "categories"("nodeId");

-- CreateIndex
CREATE INDEX "categories_nodeId_idx" ON "categories"("nodeId");

-- CreateIndex
CREATE INDEX "parse_jobs_userId_status_idx" ON "parse_jobs"("userId", "status");

-- CreateIndex
CREATE INDEX "parse_jobs_categoryId_idx" ON "parse_jobs"("categoryId");

-- CreateIndex
CREATE INDEX "parse_jobs_requestedAt_idx" ON "parse_jobs"("requestedAt");

-- CreateIndex
CREATE UNIQUE INDEX "products_asin_key" ON "products"("asin");

-- CreateIndex
CREATE INDEX "products_asin_idx" ON "products"("asin");

-- CreateIndex
CREATE INDEX "products_categoryId_idx" ON "products"("categoryId");

-- CreateIndex
CREATE INDEX "products_sellerId_idx" ON "products"("sellerId");

-- CreateIndex
CREATE INDEX "product_snapshots_productId_capturedAt_idx" ON "product_snapshots"("productId", "capturedAt");

-- CreateIndex
CREATE INDEX "product_snapshots_parseJobId_idx" ON "product_snapshots"("parseJobId");

-- CreateIndex
CREATE INDEX "product_snapshots_capturedAt_idx" ON "product_snapshots"("capturedAt");

-- CreateIndex
CREATE INDEX "reviews_productId_reviewDate_idx" ON "reviews"("productId", "reviewDate");

-- CreateIndex
CREATE INDEX "reviews_reviewDate_idx" ON "reviews"("reviewDate");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_productId_externalId_key" ON "reviews"("productId", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "proxy_entries_url_key" ON "proxy_entries"("url");

-- CreateIndex
CREATE INDEX "proxy_entries_isActive_disabledUntil_idx" ON "proxy_entries"("isActive", "disabledUntil");

-- CreateIndex
CREATE INDEX "proxy_entries_lastStatus_idx" ON "proxy_entries"("lastStatus");

-- CreateIndex
CREATE INDEX "cookie_sessions_isValid_expiresAt_idx" ON "cookie_sessions"("isValid", "expiresAt");

-- AddForeignKey
ALTER TABLE "seller_profiles" ADD CONSTRAINT "seller_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parse_jobs" ADD CONSTRAINT "parse_jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parse_jobs" ADD CONSTRAINT "parse_jobs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parse_jobs" ADD CONSTRAINT "parse_jobs_sellerProfileId_fkey" FOREIGN KEY ("sellerProfileId") REFERENCES "seller_profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_snapshots" ADD CONSTRAINT "product_snapshots_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_snapshots" ADD CONSTRAINT "product_snapshots_parseJobId_fkey" FOREIGN KEY ("parseJobId") REFERENCES "parse_jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
