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

  describe("文字列の検証", () => {
    const str = "こんにちは世界";
    test("検証値 は 期待値 と等しい", () => {
      expect(str).toBe("こんにちは世界");
      expect(str).toEqual("こんにちは世界");
    });
    test("toContain", () => {
      expect(str).toContain("世界");
      expect(str).not.toContain("こんばんは");
    });

    test("toMatch", () => {
      expect(str).toMatch(/世界/);
      expect(str).not.toMatch(/こんばんは/);
    });

    test("toHaveLength", () => {
      expect(str).toHaveLength(7);
      expect(str).not.toHaveLength(8);
    });
  });

  describe("オブジェクト内の文字列の検証", () => {
    const str = "こんにちは世界";
    const obj = { status: 200, message: str };
    test("stringContaining", () => {
      expect(obj).toEqual({
        status: 200,
        message: expect.stringContaining("世界"),
      });
    });

    test("stringMatching", () => {
      expect(obj).toEqual({
        status: 200,
        message: expect.stringMatching(/世界/),
      });
    });
  });

  describe("配列の検証", () => {
    const arr = ["apple", "banana", "cherry"];
    test("toContain", () => {
      expect(arr).toContain("banana");
      expect(arr).not.toContain("grape");
    });

    test("toHaveLength", () => {
      expect(arr).toHaveLength(3);
      expect(arr).not.toHaveLength(4);
    });

    const obj = { status: 200, message: arr };
    const obj2 = { status: 200, message: ["apple", "banana", "cherry"] };
    const obj3 = { status: 200, message: ["apple", "banana", "grape"] };
    const objects = [obj, obj2];
    test("toContainEqual", () => {
      expect(objects).toContainEqual(obj); // 配列に特定のオブジェクトが含まれているか検証する
      expect(objects).not.toContainEqual(obj3);
    });

    test("arrayContaining", () => {
      expect(arr).toEqual(expect.arrayContaining(["banana"]));
      expect(arr).not.toEqual(expect.arrayContaining(["grape"]));
    });

    test("arrayContainingEqual", () => {
      expect(arr).toEqual(expect.arrayContaining(["banana"]));
      expect(arr).not.toEqual(expect.arrayContaining(["grape"]));
    });
  });

  describe("オブジェクトの検証", () => {
    const obj = { status: 200, message: "OK" };
    test("toEqual", () => {
      expect(obj).toEqual({ status: 200, message: "OK" });
      expect(obj).not.toEqual({ status: 404, message: "Not Found" });
    });

    test("toMatchObject", () => {
      expect(obj).toMatchObject({ status: 200 }); // 部分一致でOK
      expect(obj).not.toMatchObject({ status: 404 });
    });

    test("toHaveProperty", () => {
      expect(obj).toHaveProperty("status"); // プロパティが存在するか検証
      expect(obj).not.toHaveProperty("code");
    });

    test("objectContaining", () => {
      expect(obj).toEqual(expect.objectContaining({ status: 200 })); // 対象のオブジェクトが期待値と部分的に一致していればOK
      expect(obj).not.toEqual(expect.objectContaining({ status: 404 }));
    });
  });
});
