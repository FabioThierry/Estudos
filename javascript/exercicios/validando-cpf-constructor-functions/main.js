function ValidateCPF(cpf) {
  console.log("Debug: ValidateCPF constructor called with argument", cpf);
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    /**
     * Getter for the "cpfLimpo" property.
     * Returns the CPF without any non-digit characters.
     * @return {string} The cleaned CPF.
     */
    get: function () {
      console.log("Debug: Getting 'cpfLimpo' property");
      const cleanedCPF = cpf.replace(/\D+/g, "");
      console.log("Debug: Cleaned CPF:", cleanedCPF);
      return cleanedCPF;
    },
  });
}
/**
 * Validates the CPF.
 *
 * @return {boolean} True if the CPF is valid, false otherwise.
 */
ValidateCPF.prototype.valida = function () {
  // Log the CPF being validated
  console.log("Validating CPF:", this.cpfLimpo);

  // Check if the CPF is undefined
  if (typeof this.cpfLimpo === "undefined") {
    // Log that the CPF is undefined
    console.log("CPF is undefined");
    // Return false if the CPF is undefined
    return false;
  }

  // Log the length of the CPF
  console.log("CPF has", this.cpfLimpo.length, "characters");

  // Check if the CPF has the correct length
  if (this.cpfLimpo.length !== 11) {
    // Log that the CPF has the wrong length
    console.log("CPF has wrong length");
    // Return false if the CPF has the wrong length
    return false;
  }

  // Get the partial CPF (excluding the last two digits)
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  // Log the partial CPF
  console.log("CPF partial:", cpfParcial);

  // Generate the first digit for the CPF
  const digito1 = this.criaDigito(cpfParcial);
  // Log the first digit
  console.log("First digit:", digito1);

  // Generate the second digit for the CPF
  const digito2 = this.criaDigito(cpfParcial + digito1);
  // Log the second digit
  console.log("Second digit:", digito2);

  // Concatenate the partial CPF, the first digit, and the second digit
  const novoCpf = cpfParcial + digito1 + digito2;
  // Log the type of the new CPF
  console.log(typeof Number(novoCpf));
  // Log the new CPF
  console.log("New CPF:", novoCpf);

  // Return true if the new CPF is equal to the original CPF, false otherwise
  return novoCpf === this.cpfLimpo;
};

/**
 * Generates a digit for a given partial CPF.
 *
 * @param {string} cpfParcial - The partial CPF.
 * @return {string} The generated digit.
 */
ValidateCPF.prototype.criaDigito = function (cpfParcial) {
  // Log the partial CPF being processed
  console.log("Generating digit for:", cpfParcial);

  // Convert the partial CPF into an array
  const cpfArray = Array.from(cpfParcial);
  console.log("CPF array:", cpfArray);

  // Initialize the regressive index to the length of the CPF array plus 1
  let regressivo = cpfArray.length + 1;
  console.log("Regressive index:", regressivo);

  // Calculate the total sum by multiplying each digit of the CPF array by
  // its respective index and summing them up
  const total = cpfArray.reduce((acumulador, valor) => {
    // Log the current accumulator, value, and index
    console.log(
      `Accumulator: ${acumulador}, Value: ${valor}, Index: ${regressivo}`
    );

    // Multiply the value by its index and add it to the accumulator
    acumulador += regressivo * Number(valor);

    // Decrement the regressive index
    regressivo--;

    // Return the updated accumulator
    return acumulador;
  }, 0);
  console.log("Total:", total);

  // Calculate the digit by taking 11 minus the modulo of the total by 11
  const digito = 11 - (total % 11);
  console.log("Digit:", digito);

  // Convert the digit to a string and append "0" if it's less than or equal to 9
  const result = digito <= 9 ? String(digito) : "0";
  console.log("Result:", result);

  // Return the generated digit
  return result;
};

const cpf = new ValidateCPF("705.484.450-52");

if (cpf.valida()) {
  console.log("Valid!");
} else {
  console.log("Invalid!");
}
