import { countEven, maxSubArray, sortDesc } from "./main";

describe("Fungsi mengurut angka besar ke kecil", () => {
  test("test case 1", () => {
    expect(sortDesc([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
      5, 4, 3, 3, 2, 2, 1, 1,
    ]);
  });

  test("test case 2", () => {
    expect(sortDesc([12, 20, 35, 1, 8, 100])).toEqual([100, 35, 20, 12, 8, 1]);
  });
});

describe("Fungsi menghitung max sub array dengan panjang tertentu", () => {
  test("test case 1", () => {
    expect(maxSubArray([100, 200, 300, 400], 2)).toBe(700);
  });
  test("test case 2", () => {
    expect(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });
  test("test case 3", () => {
    expect(maxSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });
});

describe("Fungsi jumlah bilangan genap dalam nested objek", () => {
  test("test case 1", () => {
    expect(
      countEven({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      })
    ).toBe(6);
  });
  test("test case 2", () => {
    expect(
      countEven({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      })
    ).toBe(12);
  });
});
