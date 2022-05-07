
export function overflowX(input: number, length: number): number {
  if (input > length - 1) {
    return input - length;
  } else if (input < 0) {
    return input + length;
  }
  return input;
}

export function overflowY(input: number, length: number, colNum: number): number {
  if (input > length - 1) {
    return input - (input - (input % colNum));
  } else if (input < -(colNum - (length % colNum))) {
    return input + length + (colNum - (length % colNum));
  } else if (input < 0) {
    return input + length - (length % colNum);
  }
  return input;
}
