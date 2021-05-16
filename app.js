const express = require("express");
const morgan = require("morgan");
const db = require('./public/db/dbinit.js') // initialize the database
//const client = require("./public/db/dbconnect");
//const postList = require("./views/postList");
//const postDetails = require("./views/postDetails");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const routes = require('./public/routes');
app.use('/main', routes);

//const baseQuery = "SELECT posts.*, users.name, counting.upvotes FROM posts INNER JOIN users ON users.id = posts.userId LEFT JOIN (SELECT postId, COUNT(*) as upvotes FROM upvotes GROUP BY postId) AS counting ON posts.id = counting.postId\n";

app.get("/", (req, res) => {
  res.redirect("/main");
})

const PORT = 1338;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
