
--- Getting genres for movie title ---
SELECT "genres".name FROM "movies_genres"
JOIN "genres" ON "genres".id = "movies_genres".genre_id
JOIN "movies" ON "movies".id = "movies_genres".movie_id
WHERE "movies".title = 'Beauty and the Beast' --- replace movie title ---

--- Getting movie description ---
SELECT "movies".description FROM "movies"
where "movies".title = 'Finding Nemo'