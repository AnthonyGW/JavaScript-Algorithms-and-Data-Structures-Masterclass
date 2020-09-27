function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoized solution (top down)
function fib2(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

// tabulated solution (bottom up)
function fib3(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(10));