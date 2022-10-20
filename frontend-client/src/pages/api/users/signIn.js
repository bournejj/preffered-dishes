
const jsonschema = require("jsonschema");
const { createToken } = require("../../../../../helpers/tokens");
const User = require("../../../models/users");
const userLoginSchema = require("../../../schemas/userLogin.json")


export default async function user(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

      const validator = jsonschema.validate(req.body, userLoginSchema);

      if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw ('sorry bad request');
      }
  else {

       const user = await User.authenticate(req.body.username, req.body.password);
       console.log(user)
       const token = createToken(user);
    return res.send({ user, token })
  }
  
  }
  else {
    throw ('sorry bad request');
   }
}