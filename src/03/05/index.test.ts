import { add, RangeError } from "./index";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値が0より小さいか100より大きいと例外がスローされる", () => {
      const message = "入力値は0〜100の間で入力してください";
      expect(() => add(-1, 100)).toThrow(RangeError);
      expect(() => add(10, -10)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(Error);
    });
  });
});
