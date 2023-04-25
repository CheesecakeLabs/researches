#!make

help:
	@echo "Usage: make [run|build|clean-setup|start|start-dev|start-dev-watch|setup-dev|clean-setup-dev|test|lint|format-code|migrate|coverage-test]"
	@echo ""
	@echo "Usage:"
	@echo "  make setup-dev						Setup the project including development dependencies"
	@echo "  make clean-setup-dev						Setup the project including development dependencies, cleaning all previous installed dependencies"
	@echo "  make clean-setup		  				Setup the project, cleaning all previous installed dependencies"
	@echo "  make build  	         					Compile the project typescript and generate the output bundles"
	@echo "  make start <ENV=production>					Execute the builded code"
	@echo "  make start-dev							Start the server in development mode"
	@echo "  make docker-start-web          				Start the server on a docker container"
	@echo "  make docker-stop-web          				Stop the server docker container"
	@echo "  make docker-start-db          				Start a database instance on a docker container"
	@echo "  make docker-stop-db          					Stop the database docker container"
	@echo "  make migrate-run <ENV=production>	        		Run the migrations"
	@echo "  make migrate-revert <ENV=production>	        		Revert the migrations"
	@echo "  make migrate-generate <ENV=production> <NAME=migration-name>	Generate a new migration based on entities changes"
	@echo "  make lint  	         					Run the server linter"
	@echo "  make lint-fix  	         				Run the server linter with autofix flag activated"
	@echo "  make format-code        					Format the server code with prettier"
	@echo "  make test  	         					Run the server tests"
	@echo "  make coverage-test        					Run the server tests with code coverage"
	@echo "  make docker-start          					Start the server and database docker containers"
	@echo "  make docker-stop          					Stop the server and database docker containers"
	@echo "  make docker-build          					Build the docker containers"
	@echo ""

# Default variables

ENV ?= production

define GET_FOLDER
	ifeq (${ENV}, development)
		ENV_FOLDER=src
	else
		ENV_FOLDER=dist
		NODE_PATH=dist/
	endif
endef

# Requirements

setup-dev:
	npm install

clean-setup-dev:
	npm ci

clean-setup:
	npm ci --production


## Web

build:
	npx tsc -p tsconfig-build.json

start:
	NODE_ENV=$(ENV) NODE_PATH=dist/ node -r ts-node/register dist/app.js

start-dev:
	NODE_ENV=development npx ts-node-dev -r tsconfig-paths/register --trace-warnings --inspect --respawn --transpile-only --ignore-watch node_modules src/app.ts

docker-start-web:
	docker-compose up -d nodejs

docker-stop-web:
	docker-compose stop nodejs


## Database

docker-start-db:
	docker-compose up -d db

docker-stop-db:
	docker-compose stop db

migrate-run:
	$(eval $(call GET_FOLDER))
	NODE_ENV=$(ENV) npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ${ENV_FOLDER}/config/database migration:run

migrate-revert:
	$(eval $(call GET_FOLDER))
	NODE_ENV=$(ENV) npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ${ENV_FOLDER}/config/database migration:revert

migrate-generate:
	$(eval $(call GET_FOLDER))
	NODE_ENV=$(ENV) npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ${ENV_FOLDER}/config/database migration:generate $(NAME)


## Code lint and format

lint:
	npx eslint src/

lint-fix:
	npx eslint src/ --fix

format-code:
	npx prettier --write src/**/*.{js,jsx,ts,tsx,json,md}


# Test

test:
	npx jest --config=./src/jest.config.js

coverage-test:
	npx jest --config=./src/jest.config.js --coverage


# Docker

docker-start:
	docker-compose up

docker-stop:
	docker-compose stop

docker-build:
	docker-compose up --build

default: help
