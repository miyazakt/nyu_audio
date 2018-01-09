export SelectorsToConnectors = (selectors) => {
  return reduce((prev, _, index, array) => {
    if (index !== 0) {
      prev.push({ from: array[index - 1], to: array[index] })
    }
    return prev
  }, [])
}
