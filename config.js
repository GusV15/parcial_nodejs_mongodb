import dotenv from "dotenv";

dotenv.config();

const PORT = 8080;
const STRCNX = process.env.STRCNX || "mongodb://localhost";
const PERSISTENCE_MODE = process.env.PERSISTENCE_MODE || "MEM";
const BASE = process.env.BASE || "test";
export default {
  BASE,
  PORT,
  STRCNX,
  PERSISTENCE_MODE,
};
