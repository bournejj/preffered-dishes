

const express = require("express");
const router = express.Router();
const db = require("../db")
const Restaurant = require("../models/restaurants");
// const ExpressError = require("../expressError")
/** GET / - returns `{cats: [cat, ...]}` */

router.get("/", async (req, res) => {
    const results = await Restaurant.findAll() 
    return res.json(results)
});
router.get("/:id", async (req, res) => {
    const {id} = req.params
    const results = await Restaurant.findById(id) 
    return res.json(results)
});



module.exports = router;