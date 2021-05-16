const express = require('express');
const router = express.Router();
const client = require("./db/dbconnect");

const songList    = require("./db/songList");
const songDetails = require("./db/songDetails");

const baseQuery = `select s.id as songid, b.name as band, s.name as song, released, rank, s.details as songdetails, b.details as banddetails
from song s inner join band b
  on s.band = b.id`;

console.log("*** IN ROUTES 1***")

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery);
    console.log("=====>", data.rows)
    res.send(songList(data.rows));
  } catch (error) { next(error) }
});

console.log("*** IN ROUTES 2***")


router.get("/:id", async (req, res, next) => {
  try {
    console.log("**",req.params)
    const data = await client.query(baseQuery + " where s.id = $1", [req.params.id]);
    const song = data.rows[0];
    console.log("***",song)
    res.send(songDetails(song));
  } catch (error) { next(error) }
});
console.log("*** IN ROUTES 3***")

module.exports = router;
