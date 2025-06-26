import { useState } from "react";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [filmes, setFilmes] = useState([]);

  const inputValue = (event) => setSearchInput(event.target.value);

  function Pesquisando(event) {
    event.preventDefault();

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q0NjFiNTQzY2Q3Yzk0ZjgyNDA0MmJlZjRjMDljMSIsIm5iZiI6MTc0OTc1MTg2Ni44NDUsInN1YiI6IjY4NGIxODNhM2E4YjIyOWM1N2JiNDI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmaXeBBcbDm3YagAJ-2AH9SKJ5u1n5_PyoNHXqXBRmw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=pt-br&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setFilmes(res.results || []))
      .catch((err) => console.error(err));
  }

  return (
    <div
      className={`bg-gradient-to-t from-zinc-700 to-zinc-800 w-full
    h-auto sm:max-w-screen-sm md:max-w-full lg:max-w-screen-lg  xl:max-w-screen-xl   my-2 p-2 mx-auto text-white
     flex flex-col  `}
    >
      <div
        className={`w-full h-[30%] border shadow-zinc-800 shadow-md
        sm:max-w-screen-sm md:max-w-full lg:max-w-screen-lg  xl:max-w-screen-xl `}
      >
        <form
          className={`h-full flex flex-col flex-wrap items-center justify-center text-4xl gap-10 shadow-md p-4
          `}
        >
          <div>
            <label>Pesquisa de Filmes</label>
          </div>
          <div className="flex flex-col items-center gap-2  md:flex-row md:items-center md:justify-center">
            <input
              className="rounded-xl p-2 mx-auto  text-black m-1"
              type="text"
              placeholder="Procure o filme"
              onChange={inputValue}
            />
            <button
              className="bg-red-800 p-2 rounded-xl shadow-lg hover:bg-red-600 "
              onClick={Pesquisando}
            >
              Pesquisar
            </button>
          </div>
        </form>
        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  my-2 mx-auto gap-2 `}
        >
          {filmes.map((filme, index) => (
            <ExibindoPesquisa key={index} filme={filme} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExibindoPesquisa({ filme }) {
  return (
    <div className="flex flex-col w-60 justify-center items-center gap-1 p-2 shadow-sm mx-auto bg-red-800 shadow-black rounded-lg">
      <h2>{filme.title}</h2>
      <img
        className="h-40"
        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
      />
    </div>
  );
}

/* ENDPOINT usado 
https://api.themoviedb.org/3/search/movie

link
https://developer.themoviedb.org/reference/search-movie
*/
