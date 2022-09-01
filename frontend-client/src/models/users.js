const db = require("../../client");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../../../config");

// const { sqlForPartialUpdate } = require("../helpers/sql");



class User {

static async authenticate(username, password) {
        // try to find the user first
        const result = await db.query(
              `SELECT username,
                      password,
                      first_name AS "firstName",
                      last_name AS "lastName",
                      email,
                      is_admin AS "isAdmin"
               FROM users
               WHERE username = $1`,
            [username],
        );
    
        const user = result.rows[0];
    
        if (user) {
          // compare hashed password to a new hash from password
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid === true) {
            delete user.password;
            return user;
          }

        }

        throw ("Invalid username/password");
    }

    static async register
        (username, password, first_name, last_name, email, isAdmin ) {

      const duplicateCheck = await db.query(
            `SELECT username
             FROM users
             WHERE username = $1`,
          [username],
      );
  
      if (duplicateCheck.rows[0]) {
        throw (`Duplicate username: ${username}`);
      }
  console.log(first_name)
      const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  
      const result = await db.query(
            `INSERT INTO users
             (username,
              password,
              first_name,
              last_name,
              email,
              is_admin)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING username, first_name AS "firstName", last_name AS "lastName", email, is_admin AS "isAdmin"`,
          [
            username,
            hashedPassword,
            first_name,
            last_name,
            email,
            isAdmin,
          ],
      );
  
      const user = result.rows[0];
  
      return user;
    }
  
 
  static async findAll() {
    const usersRes = await db.query(`SELECT * FROM users`);
    
    return usersRes.rows;
  }
  static async findById(id) {
    const usersRes = await db.query(`SELECT * FROM users WHERE id =$1`, [id])
    
    return usersRes.rows;
  }

  
//   static async createNew(username, password, first_name, last_name, email ) {
//       const {username, password, first_name, last_name, email } = req.body
//     const usersRes = await db.query(`INSERT INTO users (name, password, first) VALUES = ($1 $2)`, [nameid])
    
//     return usersRes.rows;
//   }

}

module.exports = User;