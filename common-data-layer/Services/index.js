export function money(value) {
  return (value / 100).toFixed(2).replace('.', ',')
}
