function fib(n) {
  let result = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    result.push(result[i] + result[i - 1]);
  }
  return result;
}

function fibsRec(n) {
  console.log("This was printed recursively");
  console.log("n = ", n);
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
