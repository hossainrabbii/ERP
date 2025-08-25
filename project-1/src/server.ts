import app from "./app.js";
import mongoose from "mongoose";
import config from "./app/config/index.js";
// const mongoose = require('mongoose');

// main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.mongodbUrl as string);

    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();