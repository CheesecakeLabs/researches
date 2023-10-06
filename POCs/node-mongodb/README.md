# node-typescript

![The Cheesecake Labs](https://images.sympla.com.br/5d11137d98ce3.png)

## Description

This is the backend application developed in NodeJS.

## Requirements

Make sure you have all this installed:

- `Docker`
- `node`
- `npm`

## Stack

This project uses the following stack:

- Node 16.x.x
- PostgreSQL
- Typescript
- ApolloServer
- Express
- TypeORM
- EsLint
- Jest

## Setup environment

To setup the environment, run the following commands:

```sh
cp ./src/config/.env.example ./src/config/.env.development
```

## How to run locally

To run the project locally, run the following commands:

```sh
make start-dev
```

## How to run with Docker

To build and run the project run the following commands:

**Obs.**: It will be necessary to change the `DATABASE_HOST` from `localhost` to `db` in `src/config/.env.development` file

```sh
docker-compose up --build
```
