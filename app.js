"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

let allMovies = [];

const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");

  const newMovies = allMovies.filter(function (movie) {
    return movie.year >= 2010;
  });

  console.log("Film fra 2010+:", newMovies.length);
  console.log("nye film", newMovies);

  showMovies(allMovies);
}


function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${formatMovieTitle(movie.title, movie.year)}</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

function formatMovieTitle(title, year) {
  return `${title} (${year})`;
}

console.log(formatMovieTitle("Inception", 2010));


