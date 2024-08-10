document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "050c11b5f45e3ae0d41c95e5da66ffbb";
  const BASE_URL = "https://api.themoviedb.org/3";

  const popularBtn = document.getElementById("popular");
  const topRatedBtn = document.getElementById("topRated");
  const upcomingBtn = document.getElementById("upcoming");
  const button = document.getElementById("btn");
  const query = document.getElementById("search");
  const moviesContainer = document.getElementById("moviesContainer");
  
  
  popularBtn.addEventListener("click", () => fetchMovies("/movie/popular"));
  topRatedBtn.addEventListener("click", () => fetchMovies("/movie/top_rated"));
  upcomingBtn.addEventListener("click", () => fetchMovies("/movie/upcoming"));

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const searchQuery = query.value;
    fetchMovies("/search/movie", searchQuery);
  });

  window.onload = function () {
    fetchMovies("/movie/now_playing");
  };

  function fetchMovies(endpoint, searchQuery = "") {
    let url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
    if (searchQuery) {
      url += `&query=${searchQuery}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayMovies(data.results);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function displayMovies(movies) {
    moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-card");
      movieElement.innerHTML = `
      
        <div class="movie-image">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-container" alt="${movie.title}" />
        </div>
        <div class="movie-details">
          <h2>${movie.title}</h2>
          <p>Rating: ${movie.vote_average}</p>
          <p>Release Date: ${movie.release_date}</p>
          <p>${movie.overview.length > 50 ? movie.overview.slice(0, 60) : movie.overview}...</p>
          <button onclick="addToFavorites(${movie.id})">Add to Favorites</button>
          <button class="watch-Now" onclick="detailMovie(${movie.id})">Watch Now</button>
        </div>
      
      `;
      moviesContainer.appendChild(movieElement);
    });
  }

  window.detailMovie = function(movieId) {
    window.location.href = `./MovieDetailsPage.html?id=${movieId}`;
  }
});
