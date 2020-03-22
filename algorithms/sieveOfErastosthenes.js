'use strict';
function sieveOfErastosthenes(n) {
  let primes = new Array(n + 1);
  primes.fill(true);
  primes = primes[1] = false;
  let sqrtn = Math.ceil(Math.sqrt(n));
  for (let i = 2; i <= sqrtn; i += 1) {
    if (primes[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
}

function main() {
  let n = 69;
  let primes = sieveOfErastosthenes(n);
  for (let i = 2; i <= n; i += 1) {
    if (primes[i]) {
      console.log(i);
    }
  }
}

main();
