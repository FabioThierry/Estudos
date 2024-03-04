// Algoritmo de desisão

let playerOne = "tesoura";
let computer = "papel";

if (playerOne === computer) {
  console.log("Jogo Empatado");
} else if (playerOne === "pedra") {
  if (computer === "papel") {
    console.log("O jogador venceu");
  } else {
    console.log("O computador venceu");
  }
} else if (playerOne === "papel") {
  if (computer === "pedra") {
    console.log("O jogador venceu");
} else {
    console.log("O computador venceu");
}
} else if (computer === "pedra") {
    console.log("O computador venceu");
} else {
    console.log("O jogador venceu");
}

