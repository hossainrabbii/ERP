import app from "./app.js";
import mongoose from "mongoose";
import config from "./app/config/index.js";
import type { Server } from "http";
// const mongoose = require('mongoose');

// main().catch((err) => console.log(err));

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.mongodbUrl as string);
    server = app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on("unhandledRejection", (reason, promise) => {
  console.log("unhandledRejection is detected, shutting down the server...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    console.error("Reason:", reason);
    console.error("Promise:", promise);
  }

  console.error("Reason:", reason);
  console.error("Promise:", promise);
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("uncaughtException is detected, shutting down the server...");
  process.exit(1);
});
