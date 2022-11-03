import NumbersMemDAO from "./numbersMem.js";
import NumbersMongoDAO from "./numbersMongoDB.js";

class NumbersFactoryDAO {
  static get(type) {
    switch (type) {
      case "MEM":
        console.log(" ***** Persistiendo en Memoria ***** ");
        return new NumbersMemDAO();
      case "MONGO":
        console.log(" ***** Persistiendo en MongoDB ***** ");
        return new NumbersMongoDAO();
      default:
        console.log(" ***** Persistiendo en default (Memoria) ***** ");
        return new NumbersMemDAO();
    }
  }
}

export default NumbersFactoryDAO;
