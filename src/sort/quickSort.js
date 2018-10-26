const oneLineQuickSort = arr =>
  arr.length <= 1
    ? arr
    : [
      ...oneLineQuickSort(arr.filter(x => x < arr[0])),
      ...arr.filter(x => x === arr[0]),
      ...oneLineQuickSort(arr.filter(x => x > arr[0]))
    ]
