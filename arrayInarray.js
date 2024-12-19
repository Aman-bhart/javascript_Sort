[[7, 5], [2, 3], [6, 1], [4, 5]].sort(function (a, b) {
  a.sort(function (a, b) { return a - b; });
  b.sort(function (a, b) { return a - b; });
  return a - b;
});



[[7, 3, 5], [3], [6, 1], [4, 5]].map(function (array) { return array.sort(function (a, b) { return a - b; }); }).sort(function (a, b) {
  return (a[0] - b[0]) || 0;
});


[3, [7, 3, 5], [3], [6, 1], [4, 5]].map(function (array) { return array.sort(function (a, b) { return a - b; }); }).sort(function (a, b) {
  return (a[0] - b[0]) || 0;
});

const char = function (character) {
  return (["aman", "atul", "adil", "devdatta", "vineet"].sort()).sort(function (a, b) {
    if (a.includes(character)) {

      return a.length > b.length ? 1 : -1;
    }
  });
};

[1, 3, 2, 4, 7, 6, 5, 9, 10, 8].sort(function (a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return a - b;
  }
  if (a % 2 !== 0 && b % 2 === 0) {
    return a - b;
  }
});