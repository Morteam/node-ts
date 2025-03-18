### NOC (Network Operation Center)


This project use ts-node-dev instead of nodemon

Cron is a lib to run timed task (for execute tasks in differents times)

#### Nodemailer
Send emails from Node js (It's a part, the software that connects is missing so that it can be sent correctly)

In this project I'll use Gmail account with Nodemailerb
requestions:
* 2 step verification able in Gmail account
* Add "App passwords" in "https://myaccount.google.com/u/1/apppasswords"

#### Docker + Mongo
1. Start Docker Desktop
2. Create a docker-compose.yml with some config options:
    version: image version
    services:
        mongo-fb:
            image: version of image of Mongo (ex: mongo:6.0.6)
            restart: "always", for run always that Docker Desktop run
            environment: environment vars, thar it get from .env
            volumes: where the data was hosted
            ports: where we cna connect with it
3. run ``docker --version``
4. run ``docker compose up`` or ``docker compose up -d`` run the docker-compose.yml file
5. open Mongo DB Compass with the connection: mongodb://localhost:27017 and the user and pass of the .env

*. running ``docker compose up -d``, docker download the new files and run the docker-compose.yml

#### Mongoose
Allows connect Node + Mongo DB

* In desktop, use the Mongo db Compass app

#### Postgres SQL

* In desktop, use the Table plus app

#### Prisma ORM
Allows connect Node + PostgresSQL, another options is TypeORM

Run docker and your admin DB (Table plus, example)
* Steps:
    * Install Prisma like Dev Dependency ``npm i prisma -D``
    * Run ``npx prisma init --datasource-provider PostgreSQL``
    * Create your Schema in schema.prisma
    * Run ``npx prisma migrate dev --name init``
