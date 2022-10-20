const pg = require('pg')
const client = new pg.Client('postgresql:///dietary_requirements_db')
client.connect()
module.exports = client