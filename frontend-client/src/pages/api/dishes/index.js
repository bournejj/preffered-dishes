
const client = require('../../../../client')
const Dish = require("../../../models/dishes");

export default async function getAllDishes(req, res) {

  var obj = {
    dietrary_requirments_gf: true,
    dietrary_requirments_vg: true,
    dietrary_requirments_v: true,
    }
  
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
    const searchFor = Object.values(req.query)
   
  if (Object.keys(req.query) == 'search?') {
    const category = String(Object.keys(req.query)).slice(0, -1)
  
   const searchResults = await Dish.findByContaining( category, searchFor)
   return res.json(searchResults)
  }  
  
   else if (data === true && req.query['search?'] !== undefined) {

    const category = String(Object.keys(req.query)).slice(0, -1)
   const searchResults = await Dish.findByContaining( category, searchFor[0])
  const valid = [];
  const notValid = [];
   const boolean = true
    const filteredDishes = searchResults.filter(dish => {
      
      delete filters['search?']
      let isValid = true;

      for (let key in filters) {
    
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
   
    return res.send(filteredDishes);
  }
  
  else {

    const allResults = await Dish.findAll();
    const boolean = true
    const filteredDishes = allResults.filter(dish => {
      
      let isValid = true;
      for (let key in filters) {
    
  
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
    return res.json(allResults)
  }
  
}