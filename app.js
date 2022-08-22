/** Express app for cats. */

const cors = require('cors');
const express = require('express');

const app = express();

const dishesRoutes = require('./routes/dishes');
const restaurantRoutes = require('./routes/restaurants');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { authenticateJWT } = require('./helpers/auth');
const path = require('path');
// const ExpressError = require("./expressError");
app.use(cors());
app.use(express.json());
app.use('/dishes', dishesRoutes);
app.use('/auth', authRoutes);
app.use('/restaurants', restaurantRoutes);
app.use(authenticateJWT);

app.use('/users', userRoutes);

app.use(express.static(path.resolve(__dirname,"./frontend-client/build")));

app.get("*", (req, res)=> {
    res.sendFile(path.resolve("__dirname,./frontend-client", "index.html"))
})

// --------- deployment ----------

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/src'))
// })

/** 404 catch --- passes to next handler. */

// app.use(function (req, res, next) {
//   const err = new ExpressError("Not Found", 404);

//   // pass err to the next middleware
//   return next(err);
// });

// /** general error handler */

// app.use(function(err, req, res, next) {
//   // the default status is 500 Internal Server Error
//   let status = err.status || 500;

//   // set the status and alert the user
//   return res.status(status).json({
//     error: {
//       message: err.message,
//       status: status
//     }
//   });
// });

module.exports = app;
