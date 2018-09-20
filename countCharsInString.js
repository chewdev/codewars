function count(string) {
  return (
    string.split("").reduce((obj, item) => {
      obj[item] = ++obj[item] || 1;
      return obj;
    }, {}) || {}
  );
}

console.log(count("what is this")); // {w: 1, h: 2, a: 1, t: 2, i: 2, s: 2}
