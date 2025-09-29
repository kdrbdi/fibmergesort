function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return [...sorted, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let n = Math.round(arr.length / 2);
  let arr1 = arr.slice(0, n);
  let arr2 = arr.slice(n);
  console.log(arr1);
  console.log(arr2);
  let sorted1 = mergeSort(arr1);
  let sorted2 = mergeSort(arr2);
  console.log("sorted1", sorted1);
  console.log("sorted2", sorted2);
  let merged = merge(sorted1, sorted2);
  console.log(merged);
  return merged;
}

let testArr = [6, 4, 8, 2, 0, 1, 5, 3];
mergeSort(testArr);
