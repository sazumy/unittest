describe("真偽値の検証", () => {
  test("「真の値」の検証", () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect("1").toBeTruthy();
    expect(0).not.toBeTruthy();
    expect("").not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });

  test("「偽の値」の検証", () => {
    expect(true).not.toBeFalsy();
    expect(1).not.toBeFalsy();
    expect("1").not.toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
  });
});

test("「null, undefined」の検証", () => {
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(null).not.toBeUndefined();
  expect(undefined).not.toBeNull();
});

describe("数値の検証", () => {
  const value = 2 + 2;
  test("検証値 は 期待値 と等しい", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test("検証値 は 期待値 より大きい", () => {
    expect(value).toBeGreaterThan(3); // 4 > 3 を検証
    expect(value).toBeGreaterThanOrEqual(4); // 4 >= 4 を検証
  });

  test("検証値 は 期待値 より小さい", () => {
    expect(value).toBeLessThan(5); // 4 < 5 を検証
    expect(value).toBeLessThanOrEqual(4); // 4 <= 4 を検証
  });
  describe("小数の検証", () => {
    test("小数計算は正確ではない", () => {
      expect(0.1 + 0.2).not.toBe(0.3);
    });

    test("小数計算の指定桁までを比較する", () => {
      expect(0.1 + 0.2).toBeCloseTo(0.3); // デフォルトは小数第2位まで
      expect(0.1 + 0.2).toBeCloseTo(0.3, 15); // 小数第15位まで
      expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16); // 小数第16位まで
    });
  });
});
