export function bubbleSort(data) {
  const process = [[...data]]
  for (let i = 0; i < data.length - 1; i += 1) {
    for (let j = i + 1; j < data.length; j += 1) {
      if (data[i] > data[j]) {
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
        process.push([...data])
      }
    }
  }
  process.push([...data])
  return process
}
