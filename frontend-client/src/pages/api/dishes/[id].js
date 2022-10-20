const client = require('../../../../client')
const Dish = require("../../../models/dishes");


export default async function getDishById(req, res) {

  const {id} = req.query
  const results = await Dish.findById(id) 

  res.status(200).json(results)
  
}