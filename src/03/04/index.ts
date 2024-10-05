export function add(a: number, b: number) {
  if (a + b > 100) {
    return 100;
  }
  return a + b;
}

export function sub(a: number, b: number) {
  if (a - b < 0) {
    return 0;
  }
  return a - b;
}
