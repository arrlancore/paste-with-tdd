export function sortDesc(inp: number[]): number[] {
  let n = inp.length;

  while (n > 0) {
    let i = 1;
    while (i <= inp.length) {
      const x = inp[i - 1];
      const y = inp[i];

      if (x < y) {
        const temp = inp[i];
        inp[i] = inp[i - 1];
        inp[i - 1] = temp;
      }
      i++;
    }
    n--;
  }

  return inp;
}

export function maxSubArray(inp: number[], length: number): number {
  let max = 0;
  for (let i = 0; i < inp.length; i++) {
    let currentSum = inp[i];
    for (let j = i + 1; j < i + length && j < inp.length; j++) {
      currentSum = currentSum + inp[j];
    }
    max = Math.max(max, currentSum);
  }

  return max;
}

export function countEven(inp: Record<string, any>) {
  /**
   * 1. ambil objek input
   * 2. check value yang ada pada objek
   * 3. pilih objek yg mengandung bil genap
   * 4. lihat nested
   * 5. jum semua objek yang ada
   */
  let sum = 0;

  function recursive(node: Record<string, any>) {
    Object.values(node).forEach((itm) => {
      if (typeof itm === "number" && itm % 2 === 0) {
        sum += itm;
      } else if (typeof itm === "object" && Array.isArray(itm) === false) {
        recursive(itm);
      }
    });
  }

  recursive(inp);

  return sum;
}
