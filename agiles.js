class Calculadora{
    constructor(num1, num2) {
        this.num1= num1;
        this.num2= num2;

    }

    sum() {
        return this.num1+this.num2;
}

}

module.exports = Calculadora;