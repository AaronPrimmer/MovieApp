import "../css/MovieCard.css";
import { useMovieCOntext } from "../contexts/MovieContext";

function MovieCard({ movieInfo }) {
  const { isFavorite, addToFavorites, removeFavorites } = useMovieCOntext();
  const favorite = isFavorite(movieInfo.id);

  function onFacvoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavorites(movieInfo.id);
    else addToFavorites(movieInfo);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt={movieInfo.title}
        />
      </div>
      <div className="movie-overlay">
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFacvoriteClick}
        >
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
