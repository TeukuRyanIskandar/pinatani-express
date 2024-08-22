# pinatani-express

## Project Description

Description of the project.

## How to run locally?

1. Install dependencies by running `npm install`
2. Make sure you have Docker installed and running on your machine.
3. Run development: `npm run dev`

## Scripts

- **start**: `node dist/src/server.js`
  - Start the compiled server.
- **build**: `swc src --out-dir dist`
  - Compile TypeScript files using SWC.
- **dev**: `npm-run-all dev:start-db dev:start-server`
  - Run development tasks sequentially for starting the database and the server.
- **dev:start-db**: `npm-run-all docker:up migration:run`
  - Start Docker containers and run pending migrations.
- **dev:start-server**: `npm-run-all --parallel dev:node dev:build`
  - Start the server and continuously compile files in watch mode using SWC in parallel.
- **dev:node**: `node -r @swc-node/register --watch ./src/server.ts`
  - Start the server in watch mode using SWC for TypeScript support.
- **dev:build**: `npm run build --watch`
  - Continuously compile files in watch mode using SWC.
- **docker:up**: `docker-compose up -d`
  - Start Docker containers in detached mode.
- **docker:down**: `docker-compose down`
  - Stop and remove Docker containers.
- **docker:restart**: `docker-compose restart`
  - Restart Docker containers.
- **docker:logs**: `docker-compose logs -f`
  - Tail logs for Docker containers.
- **typeorm**: `ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js`
  - Run TypeORM CLI commands.
- **migration:generate**: `npm run typeorm -- migration:generate -n`
  - Generate a new migration with TypeORM.
- **migration:run**: `npm run typeorm -- migration:run -d ./ormconfig.ts`
  - Run pending migrations with TypeORM.
- **migration:revert**: `npm run typeorm -- migration:revert -d ./ormconfig.ts`
  - Revert the last migration with TypeORM.

## Dependencies

- **express**: `^4.18.2`
  - Web framework for Node.js.
- **pg**: `^8.12.0`
  - PostgreSQL client for Node.js.
- **reflect-metadata**: `^0.2.2`
  - TypeScript decorator metadata library.
- **ts-node**: `^10.9.2`
  - TypeScript execution environment for Node.js.
- **ts-node-dev**: `^2.0.0`
  - Hot-reloading for TypeScript Node.js applications.
- **typeorm**: `^0.3.20`
  - ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **dotenv**: `^16.4.5`
  - Loads environment variables from a `.env` file into `process.env`.
- **morgan**: `^1.10.0`
  - HTTP request logger middleware for Node.js.
- **chalk**: `^4.1.2`
  - Terminal string styling done right.
- **winston**: `^3.14.2`
  - A logger for just about everything.

## Dev Dependencies

- **@swc-node/register**: `^1.10.9`
  - SWC-based TypeScript loader for Node.js.
- **@swc/cli**: `^0.3.9`
  - SWC command line interface.
- **@swc/core**: `^1.4.1`
  - SWC core library.
- **@types/express**: `^4.17.21`
  - TypeScript definitions for Express.
- **@types/morgan**: `^1.9.9`
  - TypeScript definitions for Morgan.
- **@types/node**: `^20.8.6`
  - TypeScript definitions for Node.js.
- **chokidar**: `^3.6.0`
  - File watcher for Node.js.
- **esbuild**: `^0.19.5`
  - JavaScript bundler and minifier.
- **npm-run-all**: `^4.1.5`
  - CLI tool to run multiple npm-scripts in parallel or sequentially.
- **prettier**: `^3.3.3`
  - An opinionated code formatter.
- **prettier-plugin-organize-imports**: `^4.0.0`
  - A Prettier plugin to organize imports.
- **tsconfig-paths**: `^4.2.0`
  - TypeScript path mapping for Node.js.
- **typescript**: `^5.2.2`
  - TypeScript compiler.
