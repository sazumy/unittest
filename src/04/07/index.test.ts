import { greetByTime } from ".";

describe("greetByTime", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test("午前中はGood morningが返る", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0));
    expect(greetByTime()).toBe("Good morning");
  });

  test("午後はGood afternoonが返る", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe("Good afternoon");
  });

  test("夜はGood eveningが返る", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 19, 0, 0));
    expect(greetByTime()).toBe("Good evening");
  });
});
