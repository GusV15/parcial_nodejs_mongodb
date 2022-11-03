import { MongoClient } from "mongodb";
import config from "../config.js";

class ConnectionMongoDB {
  static connection = false;
  static db;
  static client;

  static connect = async () => {
    try {
      console.log("Connected to Database...");
      ConnectionMongoDB.client = new MongoClient("mongodb://localhost", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await ConnectionMongoDB.client.connect();
      console.log("Connected Database!");

      ConnectionMongoDB.db = ConnectionMongoDB.client.db(config.BASE);
      ConnectionMongoDB.connection = true;
    } catch (error) {
      console.log(`
        Database connection error: ${error.message}`);
    }
  };

  static disconnect = async () => {
    if (!ConnectionMongoDB.connection) return;
    await ConnectionMongoDB.client.close();
  };
}

export default ConnectionMongoDB;
