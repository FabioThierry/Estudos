class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }
  isSequential() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }
  generateNewCPF() {
    const digitsWithoutDigits = this.cpfLimpo.slice(0, -2);
    const firstDigit = this.generateDigit(digitsWithoutDigits);
    const secondDigit = this.generateDigit(digitsWithoutDigits + firstDigit);
    this.newCPF = digitsWithoutDigits + firstDigit + secondDigit;
  }
  generateDigit(digits) {
    let total = 0;
    let reverseIndex = digits.length + 1;
    for (let digit of digits) {
      total += reverseIndex * Number(digit);
      reverseIndex--;
    }
    const result = 11 - (total % 11);
    return result <= 9 ? String(result) : "0";
  }

  validate() {
    if (typeof this.cpfLimpo !== "string" || this.cpfLimpo.length !== 11) {
      return false;
    }
    if (this.isSequential()) return false;
    this.generateNewCPF();
    const result = this.newCPF === this.cpfLimpo;
    return result;
  }
}

const newCpf = new ValidaCPF("705.484.450-52");

if (newCpf.validate()) {
  console.log("Valid!");
} else {
  console.log("Invalid!");
}
