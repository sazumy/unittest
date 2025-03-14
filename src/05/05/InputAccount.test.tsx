import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

const user = userEvent.setup();

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  const textbox = screen.getByRole("textbox", { name: "メールアドレス" });
  const value = "taro.tanaka@example.com";
  // NOTE: userがタイプし終わるのを待っている
  await user.type(textbox, value);

  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力欄", async () => {
  render(<InputAccount />);
  // NOTE: パスワードがroleを持たないので、このテストは失敗する
  // const textbox = screen.getByRole("textbox", { name: "パスワード" });
  // expect(textbox).toBeInTheDocument();

  expect(() => screen.getByRole("textbox", { name: "パスワード" })).toThrow();
  expect(() => screen.getByPlaceholderText("8文字以上で入力")).not.toThrow();
});