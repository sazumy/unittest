import {  greetByTime } from './greetByTime';

describe('greetByTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })
  afterEach(() => {
    jest.useRealTimers();
  })

  test('should return "おはよう" before 12:00', () => {
    jest.setSystemTime(new Date('2023-10-01T09:00:00'));
    expect(greetByTime()).toBe('おはよう');
  });
  xtest('should return "こんにちは" between 12:00 and 18:00', () => {
    jest.setSystemTime(new Date('2023-10-01T15:00:00'));
    expect(greetByTime()).toBe('こんにちは');
  });

  xtest('should return "こんばんは" after 18:00', () => {
    jest.setSystemTime(new Date('2023-10-01T19:00:00'));
    expect(greetByTime()).toBe('こんばんは');
  });
})