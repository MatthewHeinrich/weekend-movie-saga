const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  //  query to join tables. Uses id's of specific movie and returns genre, poster and description
  const query = `SELECT "genres".name, "movies".description, "movies".poster FROM "movies_genres"
                JOIN "genres" ON "genres".id = "movies_genres".genre_id
                JOIN "movies" ON "movies".id = "movies_genres".movie_id
                WHERE "movies".id = ($1)`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;