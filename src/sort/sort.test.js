/* globals test,expect */
import * as sort from './index'

test('mergeSort', () => {
  const a = [10, 9, 2, 12, 6, 5, 13, 0]
  const b = [...a]
  a.sort((a, b) => a - b)
  const process = []
  sort.mergeSort(b, 0, b.length - 1, process)
  a.forEach((v, i) => {
    expect(v).toEqual(b[i])
  })
})

test('bubbleSort', () => {
  const a = [10, 9, 2, 12, 6, 5, 13, 0]
  const b = [...a]
  a.sort((a, b) => a - b)
  sort.bubbleSort(b)
  a.forEach((v, i) => {
    expect(b[i]).toEqual(v)
  })
})

test('selectSort', () => {
  const a = [10, 9, 2, 12, 6, 5, 13, 0]
  const b = [...a]
  a.sort((a, b) => a - b)
  sort.selectSort(b)
  a.forEach((v, i) => {
    expect(b[i]).toEqual(v)
  })
})

test('InsertionSort', () => {
  const a = [10, 9, 2, 12, 6, 5, 13, 0]
  const b = [...a]
  a.sort((a, b) => a - b)
  console.log(sort.insertionSort(b))
  a.forEach((v, i) => {
    expect(b[i]).toEqual(v)
  })
})
