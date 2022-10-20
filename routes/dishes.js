

const express = require("express");
const { matchRoutes } = require("react-router-dom");
const router = express.Router();
const db = require("../db")
const Dish = require("../models/dishes");
// const ExpressError = require("../expressError")


router.get("/", async (req, res) => {
  var obj = {
  dietrary_requirments_gf: true,
  dietrary_requirments_vg: true,
  dietrary_requirments_v: true,
  }


 


  const results = await Dish.findAll()
  const filters = req.query;

  const compareFilter = () => {
    for (let key in filters) {
    let value = obj[key];
    if (obj.hasOwnProperty(key)) {
     return true
  }
    }
}
const data = compareFilter();



  




  // const dish_name = Object.keys(req.query)
  // const description = Object.keys(req.query)
  const searchFor = Object.values(req.query)
 
if (Object.keys(req.query) == 'search?') {
  

  const category = String(Object.keys(req.query)).slice(0, -1)

 const searchResults = await Dish.findByContaining( category, searchFor)


 return res.json(searchResults)

 
}

else if (data === true && req.query['search?'] !== undefined) {






  const category = String(Object.keys(req.query)).slice(0, -1)

 const searchResults = await Dish.findByContaining( category, searchFor[0])
 console.log(searchResults)
 
const valid = [];
const notValid = [];
 const boolean = true
  const filteredDishes = searchResults.filter(dish => {
    
    delete filters['search?']

  
    let isValid = true;
    for (key in filters) {
  
const dishKey =  String(dish[key])
const filtersKey = String(filters[key])




    
if (dishKey === filtersKey){

      
      }
      else if (filters[key] && dish[key] === 'false'){
      
      }
     
      else {
      isValid = isValid && dish[key] == filters[key];
      
      }
    }

    return isValid;
    
  });
 
 
  res.send(filteredDishes);

 

}



else {
  console.log('last')
  const allResults = await Dish.findAll()
  const boolean = true
  const filteredDishes = allResults.filter(dish => {
    
  
    let isValid = true;
    for (key in filters) {
  

      if (filters[key] === 'true'){
        isValid = isValid && dish[key] == true;
      }
      else if (filters[key] === 'false'){
        isValid = isValid && dish[key] == false;
      }
     
      else {
      isValid = isValid && dish[key] == filters[key];
      }
    }
    return isValid;
  });
  res.send(filteredDishes);
  console.log(filteredDishes)
  // return res.json(allResults)
}
  
 
// const boolean = true
//   const filteredDishes = results.filter(dish => {
    
  
//     let isValid = true;
//     for (key in filters) {
  

//       if (filters[key] === 'true'){
//         isValid = isValid && dish[key] == true;
//       }
//       else if (filters[key] === 'false'){
//         isValid = isValid && dish[key] == false;
//       }
     
//       else {
//       isValid = isValid && dish[key] == filters[key];
//       }
//     }
//     return isValid;
//   });
//   res.send(filteredDishes);

});

router.get("/:id", async (req, res) => {
    const {id} = req.params
const results = await Dish.findById(id)
return res.json(results)
});
router.get("/restaurant/:id", async (req, res) => {
    const {id} = req.params
    const results = await Dish.findByRestaurant(id) 
    return res.json(results)
});

router.get("/filter/cat", async (req, res) => {

    const filters = req.query;
    let query = await db.query(`SELECT * FROM dishes`) 
    let results = query.rows
  const filteredDishes = results.filter(dish => {
    let isValid = true;
    for (key in filters) {
      console.log(key, dish[key], filters[key]);
      isValid = isValid && dish[key] == filters[key];
    }
    return isValid;
  });
  res.json(filteredDishes);

//     let filter = {};

//     if(req.query.categories) {
//        filter = {category:req.query.categories.split(',')}
//     }

//     const productList = await Dish.findByCategory({category: filter})
//     console.log(productList)

// res.send(productList)


//     const category = req.query.category;
//     console.log("category is : ",category)
//     let response = [];

//     const q = {}
//     if(req.query.categories) {
//     // const categoryBooks = Books.filter((cat) => cat.category === category);
//     let mysql = "SELECT * FROM dishes ;" 
//     let query = await db.query(`SELECT * FROM dishes`) 
//     let results = query.rows

//    response = results.filter(dish => {
//         return Object.keys(q).every((key) => dish[key] === q[key]);
//     }, q);

//       const categoryBasedDishes = results.filter((dish)=>dish.category===category)
 

//       return res.json(categoryBasedDishes)
//     }
    //   res.send(JSON.stringify({ status: 200, error: null, response: results }));
    });


// router.get("/glutenFree", async (req, res) => {
//     const {glutenFree} = req.params
//     console.log(glutenFree)
// const results = await db.query(`SELECT * FROM dishes WHERE dietrary_requirments_gf = true`); 
// console.log('welcome')
// return res.json(results.rows)
// });



module.exports = router;