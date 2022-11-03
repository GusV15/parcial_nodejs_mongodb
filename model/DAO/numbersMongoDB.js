import ConnectionMongoDB from "../DB.js";

class NumbersMongoDAO {
  selectNumbers = async () => {
    if (!ConnectionMongoDB.connection) return [];
    let numeros = [];
    await ConnectionMongoDB.db
      .collection("numeros")
      .find({}, { projection: { numero: 1, _id: 0 } })
      .forEach((number) => numeros.push(number.numero));
    return { numeros };
  };

  insertNumber = async (number) => {
    if (!ConnectionMongoDB.connection) return {};
    number = !!parseInt(number) ? parseInt(number) : 0;
    await ConnectionMongoDB.db
      .collection("numeros")
      .insertOne({ numero: number });
  };

  calculateAvarageNumbers = async () => {
    if (!ConnectionMongoDB.connection) return {};
    let addNumbers = 0;
    let amountNumbers = 0;
    await ConnectionMongoDB.db
      .collection("numeros")
      .find({}, { projection: { numero: 1, _id: 0 } })
      .forEach((number) => {
        addNumbers += number.numero;
        amountNumbers++;
      });
    return { promedio: addNumbers / amountNumbers };
  };

  selectMinMax = async () => {
    if (!ConnectionMongoDB.connection) return {};
    const sortNumbers = await ConnectionMongoDB.db
      .collection("numeros")
      .find({}, { projection: { numero: 1, _id: 0 } })
      .sort({ numero: 1 })
      .toArray();
    return {
      min: sortNumbers[0].numero,
      max: sortNumbers[sortNumbers.length - 1].numero,
    };
  };

  calculateAmountNumbers = async () => {
    if (!ConnectionMongoDB.connection) return {};
    const amountNumbers = await ConnectionMongoDB.db
      .collection("numeros")
      .countDocuments();
    return {
      cantidad: amountNumbers,
    };
  };
}

export default NumbersMongoDAO;
