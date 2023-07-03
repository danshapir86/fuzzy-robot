function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }
  
  return merged;
}

const numbers = [5, 2, 8, 3, 1, 9, 4, 6, 7];
const sorted = mergeSort(numbers);
console.log(`Отсортированный массив: ${sorted}`);
