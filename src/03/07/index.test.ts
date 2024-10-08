import { timeout, wait } from "./index";

describe("wait関数のテスト", () => {
  test("指定時間待つと、経過時間をもってresolveする", () => {
    return wait(50).then((duration) => {
      expect(duration).toBe(50);
    });
  });

  test("指定時間待つと、経過時間をもってresolveする", () => {
    return expect(wait(50)).resolves.toBe(50);
  });

  test("指定時間待つと、経過時間をもってresolveする", async () => {
    await expect(wait(50)).resolves.toBe(50);
  });

  test("指定時間待つと、経過時間をもってresolveする", async () => {
    expect(await wait(50)).toBe(50);
  });
});

describe("timeout関数のテスト", () => {
  test("指定時間待つと、経過時間をもってrejectする", () => {
    return timeout(50).catch((duration) => {
      expect(duration).toBe(50);
    });
  });

  test("指定時間待つと、経過時間をもってrejectする", () => {
    return expect(timeout(50)).rejects.toBe(50);
  });

  test("指定時間待つと、経過時間をもってrejectする", async () => {
    await expect(timeout(50)).rejects.toBe(50);
  });

  test("指定時間待つと、経過時間をもってrejectする", async () => {
    // これがないと、timeout が呼び出されない、またはアサーションが実行されない場合でもテストが成功してしまう可能性があります。
    expect.assertions(1);
    try {
      await timeout(50);
    } catch (duration) {
      expect(duration).toBe(50);
    }
  });
});
