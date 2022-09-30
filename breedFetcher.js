const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const server = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(server, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback("Could not find breed");
    }
    const desc = data[0].description;
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };
