const cache = {};

export default (key) => {
  if (cache[key] === undefined) {
    cache[key] = [0, 1];

    return 1;
  }

  const length = cache[key].length
  cache[key].push(cache[key][length - 1] + cache[key][length - 2]);

  return cache[key][length];
}