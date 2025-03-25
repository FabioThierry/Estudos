import { binarySearch } from "./resources/binarySearch.ts";
import { linearSearch } from "./resources/linearSearch.ts";
import { readJSON } from "./lib.ts";

const primesPath = "./lists.json";
const { primes } = await readJSON(primesPath) as { primes: number[] };
const target = 997;

binarySearch(primes, target);
linearSearch(primes, target);
