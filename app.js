"use strict";

console.log("Movie App - DAG 2 starter...");

const movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction"
];

console.log("Alle film:", movies);
console.log("første film:", movies[0]);
console.log("anden film:", movies[1]);
console.log("tredje film:", movies[2]);

console.log("alle film:", movies.length);

for (const movie of movies) {
    console.log("Film:", movie);
}