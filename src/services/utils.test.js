import * as utils from './utils';

test('adds 1 + 2 to equal 3', () => {
  expect(utils.sum(1, 2)).toBe(3);
});

test('subs 4-2 to equal 2', () => {
  expect(utils.sub(4, 2)).toBe(2);
});

test('counter call', () => {
  const counter = utils.counter();
  const secondCounter = utils.counter();

  expect(counter()).toBe(0);
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);

  expect(secondCounter()).toBe(0);
  expect(secondCounter()).toBe(1);
  expect(secondCounter()).toBe(2);
});
