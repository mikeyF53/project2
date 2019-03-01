import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

const getYelp = async (zip) => {
  const resp = await axios(`${URL}?location=${zip}?radius=1`, {
    headers: {
      Authorization: 'Bearer ' + `${API_KEY}`
    }
  });
  return resp.data.businesses;
};
export { getYelp };
