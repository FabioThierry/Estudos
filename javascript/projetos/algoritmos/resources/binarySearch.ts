// binarySearch ==> O (log n)

export function binarySearch(a: number[], t: number) {
  let min = 0;
  let max = a.length - 1;
  let guess: number;
  let z = 0;
  while (min <= max) {
    z++;
    guess = Math.floor((min + max) / 2);

    if (a[guess] === t) {
      console.log(
        `binarySearch: Você encontrou o número ${t} na lista após ${z} tentativas`,
      );
      return guess;
    } else if (a[guess] < t) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  console.log(`O ${t} não está presente no array`);
  return -1;
}
