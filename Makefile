.PHONY: dev prod build migrate stop clean logs ps shell

dev:
	npm run start:dev

run:
	docker compose up -d --build

build:
	docker compose build --no-cache

migrate:
	npx prisma migrate dev

migrate-deploy:
	npx prisma migrate deploy

generate:
	npx prisma generate

stop:
	docker compose down

clean:
	docker compose down -v --remove-orphans
	rm -rf dist

logs:
	docker compose logs -f app

ps:
	docker compose ps

shell:
	docker compose exec app sh
	
migrate:
	npx prisma migrate dev
