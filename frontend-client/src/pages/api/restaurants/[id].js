const client = require('../../../../client')
const Restaurant = require("../../../models/restaurants");


export default async function getRestaurantById(req, res) {

  const {id} = req.query
  const results = await Restaurant.findById(id) 

  res.status(200).json(results)
  
}