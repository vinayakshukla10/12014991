/**
 * using quick sort to get the best average-case time complexity
 * if it is guaranteed that the response form url will contain
 * fewer numbers then using any sorting algorithm works but for diverse
 * cases quick sort provides best performance */ 
export const quicksort = (arr: number[], left = 0, right = arr.length - 1): number[] => {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    arr = quicksort(arr, left, pivotIndex - 1);
    arr = quicksort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function partition(arr: number[], left: number, right: number) {
  const pivot = arr[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, right);
  return partitionIndex;
}

const swap = (arr: number[], i: number, j: number): void  =>  {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}