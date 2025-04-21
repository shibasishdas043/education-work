// const x = Promise.resolve("hello");
// console.log(x.catch(x));

const x = Promise.resolve("hello");
x.catch(err => console.log("Caught:", err)); // This works fine
