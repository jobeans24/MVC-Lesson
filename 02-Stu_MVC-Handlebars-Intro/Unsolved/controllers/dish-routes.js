// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This file is a controller and it is responsible for handling the routes for the dish-routes file
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// This is the route that is being used to render the all.handlebars file
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
// This is rendering the all.handlebars file
  res.render('all');
});

module.exports = router;
