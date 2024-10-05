import { add, sub } from "./index";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は第一引数と第二引数の和である", () => {
      expect(add(50, 50)).toBe(100);
    });
    // 70+80の和が100というのは一般的には不可解な数字なので、タイトルを分かりやすくしておく
    test("合計の上限は100である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });

  describe("sub", () => {
    test("返り値は第一引数と第二引数の差である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が0である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});
