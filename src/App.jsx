import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} />
            <div className="movie-info">
              <p>Title: {movie.title}</p>
              <p>Year: {movie.year}</p>
              <p>Runtime: {movie.runtime}</p>
              <p>
                Genres:
                {movie.genres.map((genre, index) => (
                  <span className="genre" key={index}>
                    {genre}
                  </span>
                ))}
              </p>
              <p>IMDB Ratings: {movie.imdbRating}</p>
              <p>IMDB Votes: {movie.imdbVotes}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
