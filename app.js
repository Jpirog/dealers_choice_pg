const express = require("express");
const morgan = require("morgan");
const db = require('./public/db/dbinit.js') // initialize the database
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const routes = require('./public/routes');
app.use('/main', routes);

app.get("/", (req, res) => {
  res.redirect("/main");
})

app.get("*", (req, res) => { // rather than a 404, just send them to the main page
  res.redirect("/main");
})

const PORT = 1338;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
