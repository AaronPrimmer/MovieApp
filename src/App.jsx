import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const movies = [];

  return (
    <div>
      <MovieCard
        movieInfo={{ title: "Star Wars", release_date: "1978", url: "" }}
      />
    </div>
  );
}

export default App;
