const db = require("../../client");
// const { BadRequestError, NotFoundError } = require("../expressError");
// const { sqlForPartialUpdate } = require("../helpers/sql");



class Restaurant {
 
  static async findAll() {
    const restaurantsRes = await db.query(`SELECT * FROM restaurants`);
    
    return restaurantsRes.rows;
  }
  static async findById(id) {
    const restaurantRes = await db.query(`SELECT * FROM restaurants WHERE id =$1`, [id])
    
    return restaurantRes.rows;
  }

}

module.exports = Restaurant;