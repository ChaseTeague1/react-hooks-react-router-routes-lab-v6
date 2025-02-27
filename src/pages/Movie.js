import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time}min</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
