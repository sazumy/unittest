import { farewell, greet } from "./greet";

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  farewell: (name: string) => `Goodbye, ${name}!`,
}));

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${farewell("Alice")}`;
  expect(message).toBe("Goodbye, Alice!");
});

test("挨拶を返す（本来の実装通り）", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});
