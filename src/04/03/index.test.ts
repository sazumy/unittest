import { getGreet } from ".";
import * as Fetchers from "../fetchers";
import { httpError } from "../fetchers/fixtures";

jest.mock("../fetchers"); // NOTE: こうすることで、fetchers のモックを作成できる

describe("getGreet", () => {
  test("データ取得成功時：ユーザー名がない場合", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxx-123456",
      email: "test@example.com",
    });

    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
  });

  test("データ取得成功時：ユーザー名がある場合", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxx-123456",
      email: "test@example.com",
      name: "テスト太郎",
    });

    await expect(getGreet()).resolves.toBe("Hello, テスト太郎!");
  });

  test("データ取得失敗時", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);

    await expect(getGreet()).rejects.toMatchObject({
      err: { message: "internal server error" },
    });
  });

  test("データ取得失敗時、エラー相当のデータが例外としてスローされる", async () => {
    expect.assertions(1);

    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);

    try {
      await getGreet();
    } catch (err) {
      expect(err).toMatchObject(httpError);
    }
  });
});
