const request = require("request");
const args = process.argv.slice(2);
const breed = args[0];
const server = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(server, (error, response, body) => {
  if (error) {
    console.log("There was an error");
    return error;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("There is no breed with that name");
    return;
  }

  console.log(data[0].description);
});
