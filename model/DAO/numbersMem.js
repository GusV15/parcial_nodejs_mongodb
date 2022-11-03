class NumbersMemDAO {
  constructor() {
    this.numbers = [
      { id: 1, numero: 4 },
      { id: 2, numero: 22 },
      { id: 3, numero: 15 },
    ];
  }

  selectNumbers = async () => this.numbers.map((number) => number.numero);

  insertNumber = async (number) => {
    number = !!parseInt(number) ? parseInt(number) : 0;
    const id = parseInt(this.numbers[this.numbers.length - 1].id) + 1;
    this.numbers.push({ id, numero: number });
  };

  calculateAvarageNumbers = async () => {
    let addNumbers = 0;
    let amountNumbers = 0;
    this.numbers.forEach((number) => {
      addNumbers += number.numero;
      amountNumbers++;
    });
    return { promedio: addNumbers / amountNumbers };
  };

  selectMinMax = async () => {
    const sortNumbers = this.numbers.sort((a, b) => a - b);
    return {
      min: sortNumbers[0].numero,
      max: sortNumbers[sortNumbers.length - 1].numero,
    };
  };

  calculateAmountNumbers = async () => ({
    cantidad: this.numbers.length,
  });
}
export default NumbersMemDAO;
