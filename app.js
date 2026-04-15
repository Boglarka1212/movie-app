"use strict";

console.log("Movie App - DAG 2 starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Zootropolis",
    year: 2016,
    rating: 8,
    image:
      "https://img-cdn.sfanytime.com/COVERM/4012080f-09ff-46e0-9f3a-a5e500c0e6fd_COVERM_DA.jpg?ar=0.692&fit=crop&fm=pjpg&w=415&s=385f1e7fa20bd683517a4584f8a40911",
  },
  {
    title: "Maleficent",
    year: 2014,
    rating: 6.9,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_.jpg",
  },
  {
    title: "Askepot",
    year: 2015,
    rating: 7.7,
    image: "https://filmogtro.dk/uploads/pics/Eventyret-om-Askepot.jpg",
  },
];

console.log("Alle film:", movies);
console.log("antal film:", movies.length);

const movieList = document.querySelector("#movie-list");
console.log(movieList);

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

showMovies();

function showMovie(movie) {
  const highlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
    <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  image:
    "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
});

showMovies();
