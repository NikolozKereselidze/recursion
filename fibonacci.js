function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function fibsRec(n, result = [0, 1]) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (result.length >= n) return result.slice(0, n);

  const nextFib = result[result.length - 1] + result[result.length - 2];
  return fibsRec(n, result.concat(nextFib));
}

// Example usage:
const exampleInput = 8;
console.log(fibsRec(exampleInput));
