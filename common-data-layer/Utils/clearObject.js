function clearObject(object) {
  const result = {}
  for (const key of Object.keys(object)) {
    result[key] = ''
  }
  return result
}

export default clearObject
