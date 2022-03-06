const axios = require("axios");

const getRandomIdentities = async (gender,country) => {
  return axios
    .get(`https://randomuser.me/api/?results=100&password=special,upper,lower,number,10-16&gender=${gender}&nat=${country}`)
    .then((response) => {
      return response.data.results;
    })
};

export { getRandomIdentities };
