export function linearSearch(a: number[], t: number) {
  let z = 0;
  for (let i = 0; i < a.length; i++) {
    z++;
    if (a[i] === t) {
      console.log(
        `linearSearch: Você encontrou o número ${t} na lista após ${z} tentativas`,
      );
      return t;
    }
  }
  console.log("O número não esta na lista!");
  return null;
}
