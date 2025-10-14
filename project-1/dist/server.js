import app from "./app.js";
import mongoose from "mongoose";
import config from "./app/config/index.js";
// const mongoose = require('mongoose');
// main().catch((err) => console.log(err));
let server;
async function main() {
    try {
        await mongoose.connect(config.mongodbUrl);
        server = app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
process.on("unhandledRejection", () => {
    console.log("unhandledRejection is detected, shutting down the server...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("uncaughtException", () => {
    console.log("uncaughtException is detected, shutting down the server...");
    process.exit(1);
});
//# sourceMappingURL=server.js.map