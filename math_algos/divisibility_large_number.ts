export function getDigitSum(num: string): number {
  let sum = 0;
  for (const char of num) {
    sum += parseInt(char);
  }
  return sum;
}

export function isDivisibleByThree(num: string): boolean {
  return getDigitSum(num) % 3 === 0;
}
