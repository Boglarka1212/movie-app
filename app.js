"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

let allMovies = [];
const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const searchInput = document.querySelector("#search-input");

const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFilters();

  genreSelect.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyFilters() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  showMovies(filteredMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);

    movieCount.textContent = `Viser ${movies.length} film`;
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
