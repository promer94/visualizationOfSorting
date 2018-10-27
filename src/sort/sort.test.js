/* globals test,expect,describe */
import * as sort from './index'
import { generator } from '../utils'

describe('sort', () => {
  test('mergeSort', () => {
    const a = generator(100)
    const b = Array.from(a)
    a.sort((a, b) => a - b)
    sort.mergeSort(b)
    a.forEach((v, i) => {
      expect(v).toEqual(b[i])
    })
  })

  test('bubbleSort', () => {
    const a = generator(50)
    const b = [...a]
    a.sort((a, b) => a - b)
    sort.bubbleSort(b)
    a.forEach((v, i) => {
      expect(b[i]).toEqual(v)
    })
  })

  test('selectSort', () => {
    const a = generator(100)
    const b = [...a]
    a.sort((a, b) => a - b)
    sort.selectSort(b)
    a.forEach((v, i) => {
      expect(b[i]).toEqual(v)
    })
  })

  test('InsertionSort', () => {
    const a = generator(100)
    const b = [...a]
    a.sort((a, b) => a - b)
    sort.insertionSort(b)
    a.forEach((v, i) => {
      expect(b[i]).toEqual(v)
    })
  })
})
