
### `Technologies`

I will be using axios to fetch the data from the Yelp Api. Along with mapping the list of restaurant to render, as will as randomly picking a restaurant.




## Solution

I could use Math.random to generate a random number for the index of the array restaurants.

## MVP AND POST MVP

# Project Overview

### App Name: What's for Lunch?

Don't know what to eat? Let What's for Lunch help you decide!!
A simple app to help you decide what to eat nearby.

## Project Description

This project is to help users decide what to get for lunch. It will randomly generate a place to eat in around your location. The user will input their zipcode and it will return a place to eat, as well as a list if the user does not like the randomized place.

## Wireframes

## Api used

I will be using the Yelp api to get a list of restaurant data.
https://www.yelp.com/developers/documentation/v3/get_started


## Obstacles

The obstacles I had was trying to route and link to the right pages and placement. I also had a problem getting the geolocation to work.

## Solution


## Code Snip
 
 ```componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let resp = await axios(`${URL}?latitude=${lat}&longitude=${long}`, {
        headers: {
          Authorization: 'Bearer ' + API_KEY
        }
      });
      let restData = resp.data.businesses
      let idx = Math.floor(Math.random() * restData.length)
      restData = restData[idx]
      this.setState({
        randomRestData: restData
      })
    })
  };
  ```

### MVP/PostMVP - 5min

My MVP will be an app thats able to generate a random restaurant once the zipcode has been input. After clicking submit it will display the restaurant with all the restaurant's information. Clicking on restaurants name will link it to the yelp site for more information. If user wishes there is a restaurant list at the bottom if they want to check out other restaurants nearby.

In my Post MVP will incorporate the slackbot to run the app  and generate a place to eat along with a timer that will let students know when lunch is over. I will also add the google api to show where the nearby restaurants on the map.


#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to input zip and see restaurants nearby


#### PostMVP EXAMPLE
- add Google Api
- add slack bot api

## React Component Hierarchy

Header | Homepage | Nav | Restaurant Page | Restaurant List | Footer



