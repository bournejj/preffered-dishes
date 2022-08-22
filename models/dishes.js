const db = require("../db");
// const { BadRequestError, NotFoundError } = require("../expressError");
// const { sqlForPartialUpdate } = require("../helpers/sql");



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

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const company = companyRes.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    const jobsRes = await db.query(
          `SELECT id, title, salary, equity
           FROM jobs
           WHERE company_handle = $1
           ORDER BY id`,
        [handle],
    );

    company.jobs = jobsRes.rows;

    return company;
  }

}

module.exports = Dish;