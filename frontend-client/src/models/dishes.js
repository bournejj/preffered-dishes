
const db = require('../../client');

class Dish {
  static async add(item) {
    await db.query(`INSERT INTO `)
  }
 
  static async findAll() {
    const dishesRes = await db.query(`SELECT * FROM dishes`);
    
    return dishesRes.rows;
  }
  static async findById(id) {
    const disheRes = await db.query(`SELECT * FROM dishes WHERE id =$1`, [id])
    
    return disheRes.rows;
  }
  static async findByRestaurant(id) {
    const disheRes = await db.query(`SELECT * FROM dishes WHERE restaurantid =$1`, [id])
    
    return disheRes.rows;
  }
  static async findByDietaryReq(id) {
    const disheRes = await db.query(`SELECT * FROM dishes WHERE id =$1`, [id])
    
    return disheRes.rows;
  }
  
  static async findByCategory(req, res) {
    const dishesRes = await db.query(`SELECT * FROM dishes`);
    
    return dishesRes.rows;

  }
  static async findByContaining(category, dish_name) {
    console.log(category)
    console.log(dish_name)
    var name= ("%" + dish_name + "%")
    
    const dishesRes = await db.query(`SELECT * FROM dishes WHERE lower(description) LIKE '${name}' OR lower(dish_name) LIKE '${name}'`);
    
    
    return dishesRes.rows;

  }

}

module.exports = Dish;