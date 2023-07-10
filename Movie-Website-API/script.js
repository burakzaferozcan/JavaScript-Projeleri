const container = document.querySelector(".container");
const searchInput = document.querySelector("#searchInput")
const text = document.querySelector(".text")
searchInput.addEventListener("keyup", movieAddToUI);
discoverMovieAddToUI();
function movieAddToUI() {
  if (searchInput.value.trim() === "" || searchInput.value.trim() === null) {
    container.innerHTML = "";
    discoverMovieAddToUI();
    text.setAttribute("style","display:flex")
  } else {
    text.style.display = "none";
    container.innerHTML = "";
    const value = searchInput.value
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    searchMovieAddToUI(value);
  };
};
async function searchMovieAddToUI(movieName) {
  const movies = (await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eca5de4f5339af08311573f224c18820&query=${movieName}`)).json()).results;
  getMovieToAPI(movies);
};
async function discoverMovieAddToUI() {
  const movies = (await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eca5de4f5339af08311573f224c18820`)).json()).results;
  getMovieToAPI(movies);
};
function getMovieToAPI(movies) {
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "movie-wrapper";
    div.innerHTML = `
<img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="" />
<div class="movie-title">
  <p>${movie.title}</p>
  <span  style="color: ${IMDBpointColor(movie.vote_average.toFixed(1))};">${movie.vote_average.toFixed(1)}</span>
</div>
<span class="movie-explanation"><span class="line"></span>${movie.overview}</span>`;
    container.append(div);
  });
};
function IMDBpointColor(point){
if(point>=8){
  return "green";
}else if(point>5){
  return "orange";
}else{
  return "red";
};
};