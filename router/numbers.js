import express from "express";
import ControllerNumbers from "../controller/numbers.js";

class RouterNumbers {
  constructor() {
    this.router = express.Router();
    this.controllerNumbers = new ControllerNumbers();
  }
  start() {
    this.router.get("/entrada", this.controllerNumbers.getNumbers);

    this.router.get("/promedio", this.controllerNumbers.getAvarageNumbers);

    this.router.get("/minmax", this.controllerNumbers.getMinMax);

    this.router.get("/cantidad", this.controllerNumbers.getAmountNumbers);

    this.router.post("/entrada", this.controllerNumbers.postNumber);

    return this.router;
  }
}

export default RouterNumbers;
