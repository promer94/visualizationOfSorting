/* globals it,expect,describe */
import * as sort from './index'
import { generator } from '../utils'

describe('sort', () => {
  describe('bubble sort', () => {
    it('bubble sort', () => {
      const a = generator(50)
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
      const a = generator(100)
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
      const a = generator(100)
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
      const a = generator(100)
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
      const a = generator(100)
      const b = [...a]
      a.sort((a, b) => a - b)
      sort.quickSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
    it('one line quick sort', () => {
      const a = generator(100)
      let b = [...a]
      a.sort((a, b) => a - b)
      b = sort.oneLineQuickSort(b)
      a.forEach((v, i) => {
        expect(b[i]).toEqual(v)
      })
    })
  })
})
