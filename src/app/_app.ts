import { router } from "@routes/_routes";
import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import { logger } from "./lib/utils";
const app = express();

const morganFormat =
  ":method :url :status :response-time ms";

app.use(express.json());
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);
app.use("/", router);

export default app;
