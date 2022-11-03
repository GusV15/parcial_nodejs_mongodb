import express from "express";
import config from "./config.js";
import ConnectionMongoDB from "./model/DB.js";
import RouterNumbers from "./router/numbers.js";

const app = express();

// Express configuration
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/numeros", new RouterNumbers().start());

if (config.PERSISTENCE_MODE === "MONGO") {
  await ConnectionMongoDB.connect();
}

// Set PORT
const PORT = config.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);
server.on("error", (error) => `Server error: ${error.message}`);
