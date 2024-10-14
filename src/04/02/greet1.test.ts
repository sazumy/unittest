import { greet } from "./greet";

test("挨拶を返す（本来の実装通り）", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});
