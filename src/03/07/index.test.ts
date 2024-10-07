import { wait } from "./index";

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
