const fetch = require("node-fetch");

const url = "https://dad-jokes.p.rapidapi.com/joke/ai/cow";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "02fd4a8434mshea69a2a88089109p1bd2d8jsn84832ff058b3",
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
