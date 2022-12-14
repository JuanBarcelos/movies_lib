import { useEffect, useState } from "react";
import MoviesCard from "../components/MovieCard";
import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRateUrl);
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
};
export default Home;
