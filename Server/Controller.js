const axios = require('axios');
const key = require('../../mvp/config');
const data = require('./dummydata');

module.exports = {
  info: {
    get: (req, res) => {
      res.status(200).send(data);
    },
  },
};

// axios({
//   method: 'GET',
//   url: 'https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
//     'x-rapidapi-key': '79c2da9540msh5274458b523609dp19ad21jsn4499a7388c62',
//   },
//   params: {
//     number: '15',
//     ingredients: 'buger',
//   },
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });