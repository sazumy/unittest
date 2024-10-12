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

  test("指定時間待つと、経過時間をもってrejectする", async () => {
    try {
      // timeout関数のつもりが、wait関数を呼び出してしまっている
      await wait(50);
      // ここで終了してしまい、テストは成功する
    } catch (err) {
      // アサーションは実行されない
      expect(err).toBe(50);
    }
  });

  test("指定時間待つと、経過時間をもってrejectする", async () => {
    expect.assertions(1); // アサーションが一度実行されることを期待する
    try {
      await wait(50);
      // アサーションが実行されないまま終了するので、テストは失敗する
    } catch (err) {
      expect(err).toBe(50);
    }
  });

  test("returnしていないため、Promiseが解決される前にテストが終了する", () => {
    expect(wait(2000)).resolves.toBe(3000);
    // 正しくは、アサーションをreturnする
    // return expect(wait(2000)).resolves.toBe(3000);
  });
});
