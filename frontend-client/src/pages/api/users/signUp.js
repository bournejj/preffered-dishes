const jsonschema = require("jsonschema");
const { createToken } = require("../../../../../helpers/tokens");
const User = require("../../../models/users");
const userNewSchema = require("../../../schemas/userNew.json")

export default async function user(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  
 
      const validator = jsonschema.validate(req.body, userNewSchema);

      if (!validator.valid) {
        console.log('not valid')
        const errs = validator.errors.map(e => e.stack);
        throw ('sorry bad request');
      }
  else {

       const user = await User.register(req.body.username, req.body.password, req.body.first_name, req.body.last_name, req.body.email );
       const token = createToken(user);
console.log(user)
    return res.send({ user, token })
  }
  
  }
  else {
    throw ('sorry bad request');
   }
}