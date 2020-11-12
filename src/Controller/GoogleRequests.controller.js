const axios = require("axios");

const requestNearBy = async (req, res) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.latlng}&radius=500&type=restaurant&key=${process.env.NODE_ENV_MAPS_KEY}`
    );
    const data = response.data.results;
    const restaurants = data.map((restaurant) => ({
      hash_id: restaurant.place_id,
      address: restaurant.vicinity,
      name: restaurant.name,
      photos: restaurant.photos,
      geometry: restaurant.geometry,
    }));
    return res.json(restaurants);
  } catch (error) {
    throw Error("Erro na Request");
  }
};

const requestDetailsPlace = async (req, res) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.hash_id}&fields=name,rating,formatted_phone_number,formatted_address,url,reviews&key=${process.env.NODE_ENV_MAPS_KEY}`
    );
    const place = response.data.result;
    const placeDetails = {
      hash_id: place.place_id,
      formatted_address: place.formatted_address,
      formatted_phone_number: place.formatted_phone_number,
      name: place.name,
      rating: place.rating,
      url: place.url,
      reviews: place.reviews,
    };
    return res.json(placeDetails);
  } catch (error) {
    throw Error("Erro na Request");
  }
};

const GoogleRequests = { requestNearBy, requestDetailsPlace };

module.exports = GoogleRequests;
