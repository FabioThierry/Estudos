// Crie uma estrutura if que verifique se um número é positivo, negativo ou zero.

function verificadorNumero(numero) {
  if (numero > 0) {
    return console.log(`O número ${numero} é positivo`);
  } else if (numero < 0) {
    return console.log(`O número ${numero} é negativo`);
  } else if (numero === 0) {
    return console.log(`O número é 0`);
  } else {
    return console.log("Nenhum número para verificar foi fornecido");
  }
}

verificadorNumero(12);
verificadorNumero(-15);
verificadorNumero(0);
verificadorNumero();
