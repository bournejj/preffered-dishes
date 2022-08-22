const express = require("express");
const router = express.Router();
const db = require("../db")
const User = require("../models/users");
const jsonschema = require("jsonschema");
const { createToken } = require("../helpers/tokens");
const userNewSchema = require("../schemas/userNew.json");
const { BadRequestError } = require("../expressError");
const { JsonWebTokenError } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const {ensureLoggedIn, ensureAdmin} = require("../helpers/auth")



router.get("/", async (req, res, next) => {
    try{
const results = await User.findAll() 
return res.json(results)
    } catch (e) {
        return next(e)
    }
});


  





module.exports = router;