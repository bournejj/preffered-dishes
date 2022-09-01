
const client = require('../../../../client')


export default async function getAllRestaurants(req, res) {


  const restaurants = await client.query('SELECT * FROM restaurants')

  res.status(200).json(restaurants.rows)
  
}

