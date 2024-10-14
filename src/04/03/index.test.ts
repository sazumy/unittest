import { getGreet } from ".";
import * as Fetchers from "../fetchers";

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
});
