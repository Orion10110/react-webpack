export function sum (a, b) {
  return a + b;
}

export function sub (a, b) {
  return a - b;
}

export function counter () {
  let count = 0;
  return () => {
    // eslint-disable-next-line no-plusplus
    return count++;
  };
}
