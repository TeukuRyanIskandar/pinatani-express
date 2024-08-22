import { envConfig } from "@root/env.config";
import chalk from "chalk";
import { createServer } from "http";
import { AppDataSource } from "ormconfig";
import "reflect-metadata";
import app from "./app/_app";

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log(
      chalk.blue`Data Source initialized successfully - DB connected on port ${envConfig.POSTGRES_PORT}`,
    );

    const server = createServer(app);
    const PORT = envConfig.SERVER_PORT || 4000;

    server.listen(PORT, () => {
      console.log(
        chalk.blue`Server running on port ${PORT}`,
      );
    });
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      console.error(chalk.red`ERROR: DATABASE NOT FOUND`);
      if (envConfig.NODE_ENV === "development") {
        console.error(
          chalk.cyan`Please ensure that the database server is running\nRUN SCRIPT: "npm run docker:up"`,
        );
      }
    }

    console.error(error);
  }
}

startServer();
