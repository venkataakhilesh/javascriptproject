// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTBjMTFiNWY0NWUzYWUwZDQxYzk1ZTVkYTY2ZmZiYiIsIm5iZiI6MTcyMjA2NDEyMi42ODUwOTcsInN1YiI6IjY2YTQ5YjJlZDRkZjMwYWY4NDkxMjU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BXF-nisPUoaBqr1nZ2j8rQfnH98J0Hs7Gb0hKlv6Vwg'

//   }
// };

// fetch(url, options)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then(data => {
//     const movieList = document.getElementById('movie-list');
//     movieList.innerHTML = data.results.map(movie => `
//       <div class="movie-item">
//         <h2>${movie.title}</h2>
//         <p>${movie.overview}</p>
//         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
//       </div>
//     `).join('');
//   })
//   .catch(err => console.error('Error:', err));

// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTBjMTFiNWY0NWUzYWUwZDQxYzk1ZTVkYTY2ZmZiYiIsIm5iZiI6MTcyMjA2NDEyMi42ODUwOTcsInN1YiI6IjY2YTQ5YjJlZDRkZjMwYWY4NDkxMjU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BXF-nisPUoaBqr1nZ2j8rQfnH98J0Hs7Gb0hKlv6Vwg'
//   }
// };

// fetch(url, options)
//   .then(res => {
//     if (!res.ok) {
//       console.error('Network response was not ok:', res.statusText);
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log('Data received:', data); // Debugging: Log the response data

//     const movieList = document.getElementById('movie-list');
//     if (!movieList) {
//       console.error('No element with ID "movie-list" found');
//       return;
//     }

//     if (data.results && Array.isArray(data.results)) {
//       movieList.innerHTML = data.results.map(movie => `
//         <div class="movie-item">
//           <h2>${movie.title}</h2>
//           <p>${movie.overview}</p>
//           <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
//         </div>
//       `).join('');
//     } else {
//       console.error('Unexpected data structure:', data);
//     }
//   })
//   .catch(err => {
//     console.error('Error fetching data:', err);
//   });

const moviename = document.getElementById("search");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const appId = "b836005f";
const appKey = "050c11b5f45e3ae0d41c95e5da66ffbb";

const fetchResult = async (query) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    Result(data.results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Result = (movie) => {
  result.innerHTML = "";
  // if (recipes.length === 0) {
  //     result.innerHTML = '<p>No recipes found.</p>';
  //     return;
  // }
  movie.forEach((item) => {
    const movie = item.movie;
    const moviecard = document.createElement("div");
    movieCard.className = "card";
    movieCard.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.label}">
            <h3>${movie.title}</h3>
        `;
    movieCard.addEventListener("click", () => displaymovie(movie));
    result.appendChild(movieCard);
  });
};

const displaymovie = (movie) => {
  const Details = `
        <h3>${movie.title}</h3>
        <img src="${movie.poster_path}" style="width:100%; max-width:300px;">
        <p><strong>release_date:</strong> ${movie.release_date.join(", ")}</p>
        <h4>Overview:</h4>
        <p>${movie.overview}</p>
        
    `;
  result.innerHTML = Details;
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = movieName.value.trim();
  fetchResult(name);
});
