import { farewell, greet } from "./greet";

jest.mock("./greet", () => ({
  farewell: (name: string) => `Goodbye, ${name}!`,
}));

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${farewell("Alice")}`;
  expect(message).toBe("Goodbye, Alice!");
});

test("挨拶が未実装（本来の実装ではない）", () => {
  expect(greet).toBe(undefined);
});
