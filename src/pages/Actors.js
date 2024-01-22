import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actor, setActor] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(data => setActor(data))
  }, [])

  const actors = actor.map(actor => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        <li>{actor.movies}</li>
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
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors}
      </main>
    </>
  );
};

export default Actors;
