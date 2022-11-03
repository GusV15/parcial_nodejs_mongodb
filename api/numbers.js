import config from "../config.js";
import NumbersFactoryDAO from "../model/DAO/numbersFactory.js";

class ApiNumbers {
  constructor() {
    this.numbersModel = NumbersFactoryDAO.get(config.PERSISTENCE_MODE);
  }
  findNumbers = async () => await this.numbersModel.selectNumbers();

  saveNumber = async (number) => {
    return await this.numbersModel.insertNumber(number);
  };

  calcAvarageNumbers = async () => {
    return await this.numbersModel.calculateAvarageNumbers();
  };

  findMinMax = async () => {
    return await this.numbersModel.selectMinMax();
  };

  findAmountNumbers = async () => {
    return await this.numbersModel.calculateAmountNumbers();
  };
}

export default ApiNumbers;
