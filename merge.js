function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const arrMiddle = Math.floor(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, arrMiddle));
  const arrRight = mergeSort(arr.slice(arrMiddle, arr.length));

  return merge(arrLeft, arrRight);
}

function merge(left, right) {
  const newArr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(right.shift());
    }
  }

  return newArr.concat(left, right);
}

console.log(mergeSort([200, 330, 4030, 50]));
