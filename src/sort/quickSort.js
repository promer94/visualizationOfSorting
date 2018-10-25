const oneLineQuickSort = arr =>
  arr.length <= 1
    ? arr
    : oneLineQuickSort(arr.filter(x => x < arr[0]))
      .concat(arr.filter(x => x === arr[0]))
      .concat(oneLineQuickSort(arr.filter(x => x > arr[0])))
