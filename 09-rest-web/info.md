## Web Server

Its a software and hardware that allow us serve (get request and response accross a browser) content (like files, websites, text, etc) according to a URL


### HTTP Status
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status


### Run PostgresQL
* Docker desktop must be running
* Create .env file and set values for:
  * PROD=
  * POSTGRES_URL=
  * POSTGRES_DB=
  * POSTGRES_USER=
  * POSTGRES_PASSWORD=
* Open a terminal in the project and run `docker compose up -d`
* Install Prisma (https://www.prisma.io/) `npm i prisma -D`
* Set up Prisma running `npx prisma init --datasource-provider postgresql`
  * Then, Create DATABASE_URL in the .env file or replace DATABASE_URL by POSTGRES_URL in the schema.prisma file
  * Optional: Run `npx prisma db pull` to turn your database schema into a prisma schema
  * Optional: Run `npx prisma generate` to generate the prisma client, you can then starting querying your DB (more info: https://pris.ly/d/getting-started)
* Define your Model in the schema.prisma and the migrate it to the DB running `npx prisma migrate dev --name init`
  * or if you have a DB running you can download it `npx prisma db pull`


### Testing
* `npm i -D jest @types/jest ts-jest supertest`
* Create a jest config file `npx jest --init` and set up it
* jest.config.ts:
  * Set the prop `preset: "ts-jest"`
  * Set the prop `testEnvironment: "jest-environment-node"`
  * Set the prop `setupFiles: [ "<rootDir>/setupTests.ts" ]` and create in the root the file setupTests.ts
* test.config.ts
  * Set the prop `exclude: ["node_modules", "dist", "src/**/*.test.ts]`
  * Set the prop `include: ["node_modules", "dist", "src/**/*.test.ts]`
* package.json:
  * create scripts:
    ``
      "test": "jest",
      "test:w": "jest --watch",
      "test:cv": "jest --coverage"
    ``



DB:
* supabase.com

FE:
* render.com
