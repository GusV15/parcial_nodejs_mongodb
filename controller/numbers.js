import ApiNumbers from "../api/numbers.js";

class ControllerNumbers {
  constructor() {
    this.apiNumbers = new ApiNumbers();
  }
  getNumbers = async (req, res) => {
    res.json(await this.apiNumbers.findNumbers());
  };

  getAvarageNumbers = async (req, res) => {
    res.json(await this.apiNumbers.calcAvarageNumbers());
  };

  postNumber = async (req, res) => {
    const { numero } = req.body;
    await this.apiNumbers.saveNumber(numero);
    res.json({ status: "ok" });
  };

  getMinMax = async (req, res) => {
    res.json(await this.apiNumbers.findMinMax());
  };

  getAmountNumbers = async (req, res) => {
    res.json(await this.apiNumbers.findAmountNumbers());
  };
}

export default ControllerNumbers;
