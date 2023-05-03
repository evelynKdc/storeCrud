const express = require("express");
const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const categoriesRouter = require('./categoriesRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);  //needing to put "/api/v1" before your especific route
  router.use('/products', productsRouter),
  router.use('/users', usersRouter),
  router.use('/categories', categoriesRouter)
}

module.exports = routerApi;