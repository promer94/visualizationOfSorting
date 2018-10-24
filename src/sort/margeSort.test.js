/* globals test,expect */
import { mergeSort } from './margeSort'
test('margeSort', () => {
  const a = [9, 10, 2, 12, 1, 5, 13, 0]
  const b = [...a]
  a.sort((a, b) => a - b)
  mergeSort(b, 0, b.length - 1)
  a.forEach((v, i) => {
    expect(v).toEqual(b[i])
  })
})
