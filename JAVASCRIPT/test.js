const arr = [34, 5, 3242, 354, 5432, 324, 24, 32324, 5];
const list = [...arr.keys()];
const bist = [...arr.values()];
for (const [x, y] of arr.entries()) {
  // console.log(x, y)
}

const data = arr.entries();
for (const i of data) {
//   console.log(i);
}

console.log(data[3]);