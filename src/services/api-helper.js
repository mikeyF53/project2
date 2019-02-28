import axios from 'axios'
const API_KEY = 'RJJInOzvTn65u20AVDfKP9jx-goDOjHp23kiP5Ve_McoQxLljzX2a2N4APm3FH30DjKb9pVgScteKeA1EwuhlM-QhHImrVrUmR77pY_0Lykd-ZBepvOGpk_Z2NhyXHYx';
const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
const id = 'DQPaDBnn8HwA7hq3pzcK3A'


const getYelp = async (zip) => {
  const resp = await axios(`${URL}?location=${zip}?radius=1`, {
    headers: {
      Authorization: 'Bearer ' + API_KEY
    }
  })
  return resp.data.businesses;
};


export { getYelp };
