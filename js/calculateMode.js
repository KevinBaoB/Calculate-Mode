const calculateMode = (arr) => {
  const obj = {};
  let res = [];
  arr.forEach((num) => {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  });
  let highestVal = 0;
  let highestKey = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestVal) {
      highestVal = value;
      highestKey = key;
    }
    if (value === highestVal) {
      res.push(key);
    }
  }
  // console.log(obj);
  // console.log(res);
  return res;
};

console.log(calculateMode([3, 5, 4, 4, 1, 1, 2, 3]));
// console.log(calculateMode(["who", "what", "where", "who"]));
