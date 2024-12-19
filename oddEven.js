const isOdd = function (num) {
  return num & 1;
};

const isEven = function (num) {
  return !(num & 1);
};

const order = function (array) {
  return array.sort(function (a, b) {
    if (isEven(a) && isEven(b)) {
      return a - b;
    }

    if (isOdd(a) && isOdd(b)) {
      return a - b;
    }

    return (a & 1) - (b & 1);
  });
};

console.log(order([6, 7, 5, 3, 2, 4]));
console.log(order([1, 2, 13, 14, 6, 7, 5, 3, 2, 4]));
console.log(order([1, 2]));
console.log(order([1, 6, 2, 1, 4]));