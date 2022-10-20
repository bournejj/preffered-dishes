const express = require("express");
const router = express.Router();
const db = require("../db")
const User = require("../models/users");
const jsonschema = require("jsonschema");
const { createToken } = require("../helpers/tokens");
const userLoginSchema = require("../schemas/userLogin.json");
const userNewSchema = require("../schemas/userNew.json");
const { BadRequestError } = require("../expressError");
const { JsonWebTokenError } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const {ensureLoggedIn} = require("../helpers/auth")


router.post("/login", async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, userLoginSchema);
      if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
      }
  
      const user = await User.authenticate(req.body.username, req.body.password );
      if(user) {
        const token = createToken(user);
      return res.status(201).json({ user, token });
      }
    } catch (err) {
      return next(err);
    }
  });


router.post("/register", async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, userNewSchema);
      if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
      }
  
      const user = await User.register(req.body);
      const token = createToken(user);
      return res.status(201).json({ user, token });
    } catch (err) {
      return next(err);
    }
  });


module.exports = router;