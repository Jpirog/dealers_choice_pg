const express = require('express');
const router = express.Router();
const client = require("./db/dbconnect");

const songList = require("./db/songList");
const songDetails = require("./db/songDetails");
const invalidSong = require("./db/invalidSong");

const baseQuery = `select s.id as songid, b.name as band, s.name as song, released, rank, s.details as songdetails, b.details as banddetails
from song s inner join band b
  on s.band = b.id`;

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery + " ORDER BY 2");
    res.send(songList(data.rows));
  } catch (error) { next(error) }
});

router.get("/:id", async (req, res, next) => {
  try {
    if (isNaN(req.params.id) || typeof (req.params.id*1) !== 'number' || req.params.id % 1 !== 0) {
      res.send(invalidSong(req.headers.host))
      return;
    }
    const data = await client.query(baseQuery + " where s.id = $1", [req.params.id]);
    const song = data.rows[0];
    if (typeof song === 'undefined') {
      res.send(invalidSong(req.headers.host))
      return;
    }
    res.send(songDetails(song, req.headers.host));
  } catch (error) { next(error) }
});

module.exports = router;
