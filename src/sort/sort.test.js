/* globals it,expect,describe */
import * as sort from './index'
import { arrayGenerator } from '../utils'

describe('sort', () => {
  describe('bubble sort', () => {
    it('bubble sort', () => {
      const a = arrayGenerator(50)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.bubbleSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
  })

  describe('selection sort', () => {
    it('selection sort', () => {
      const a = arrayGenerator(100)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.selectSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
  })

  describe('insertion sort', () => {
    it('insertion sort', () => {
      const a = arrayGenerator(100)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.insertionSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
  })
  describe('merge sort', () => {
    it('top-down merge sort', () => {
      const a = arrayGenerator(1000)
      const b = Array.from(a)
      a.sort((a, b) => a - b)
      sort.mergeSort(b)
      a.forEach((v, i) => {
        expect(v).toEqual(b[i])
      })
    })
  })
  describe('quick sort', () => {
    it('tow-way quick sort', () => {
      const a = arrayGenerator(1000)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.quickSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
    it('one line quick sort', () => {
      const a = arrayGenerator(1000)
      let b = [...a]
      a.sort((a, b) => a - b)
      b = sort.oneLineQuickSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
    it('three-way quick sort', () => {
      const a = arrayGenerator(1000)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.quickSort(b, 0, b.length - 1, true)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
  })
})
