import axios from 'axios'
const API_KEY = 'RJJInOzvTn65u20AVDfKP9jx-goDOjHp23kiP5Ve_McoQxLljzX2a2N4APm3FH30DjKb9pVgScteKeA1EwuhlM-QhHImrVrUmR77pY_0Lykd-ZBepvOGpk_Z2NhyXHYx';
const id = 'DQPaDBnn8HwA7hq3pzcK3A'
const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
const URL2 = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/'

// const api = axios.create({
//   baseURL: URL,
//   headers: {
//     Authorization: `Bearer ${API_KEY}`
//   }
// });

const getYelp = async (zip, lat ,long) => {
  const resp = await axios(`${URL}?location=${zip}?radius=1?latitude=${lat}?longitude=${long}`, {
    headers: {
      Authorization: 'Bearer ' + API_KEY
    }
  })
  return resp.data.businesses;
};
const yelpImg = async (id) => {
  const resp = await axios(`${URL2}${id}`, {
    headers: {
      Authorization: 'Bearer ' + API_KEY
    }
  })
  return resp.data;
};


export { getYelp , yelpImg };
