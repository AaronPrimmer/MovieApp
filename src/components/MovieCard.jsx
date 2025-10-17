import "../css/MovieCard.css";

function MovieCard({ movieInfo }) {
  function onFacvoriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movieInfo.url} alt={movieInfo.title} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFacvoriteClick}>
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
