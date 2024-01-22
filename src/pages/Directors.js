import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirector] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirector(data))
  }, [])

  const directors = director.map(director => (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        <li>{director.movies}</li>
      </ul>
    </article>
  ))

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors}
      </main>
    </>
  );
};

export default Directors;
