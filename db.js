/** Database setup for cats. */
const { Client } = require("pg");

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///dietary_requirements_test"
  : "postgresql:///dietary_requirements_db";

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;