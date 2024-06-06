import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <ul>
        <h1>Movie List Section</h1>
          {movies.map((item, index) => (
            <div key={index} className="movie-list-card">
              <div className="movie-picture">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="movie-list">
                <p>Title: {item.title}</p>
                <p>Year: {item.year}</p>
                <p>Runtime: {item.runtime}</p>
                <p>Genres:{item.genres.map((genre, grnreIndex) => (
                  <span key={grnreIndex} className="genre-box">{genre}</span>
                ))}</p>
                <p>IMDB Ratings: {item.imdbRating} </p>
                <p>IMDB Votes: {item.imdbVotes}</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
