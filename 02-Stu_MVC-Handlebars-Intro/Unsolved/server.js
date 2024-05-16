// ? Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// ? Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// app.engine('handlebars', hbs.engine); // This is setting the view engine to handlebars
app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars'); // This is setting the view engine to handlebars
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public'))); // This is setting the public folder as the static folder
app.use(require('./controllers/dish-routes')); // This is requiring the dish-routes file

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
