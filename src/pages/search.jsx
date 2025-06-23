import { useState } from "react";
import { useEffect } from "react";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [filmes, setFilmes] = useState([]);

  const valorDigitado = (event) => setSearchInput(event.target.value);

  function PegandoValor(event) {
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
    <div className="bg-red-800 max-w-screen-xl h-auto  my-2 p-2 text-white flex flex-col ">
      <div className="w-full h-[30%] border border-red-900">
        <form className="h-full flex flex-col items-center justify-center text-4xl gap-10 shadow-md p-2">
          <div>
            <label>Pesquisa de Filmes</label>
          </div>
          <div>
            <input
              className="rounded-xl p-2 mx-4 text-black"
              type="text"
              placeholder="Digite o nome do filme"
              onChange={valorDigitado}
            />
            <button
              className="bg-slate-800 p-2 rounded-xl"
              onClick={PegandoValor}
            >
              Pesquisar
            </button>
          </div>
        </form>
        <div className="grid grid-cols-4 my-2">
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
    <div className="flex flex-col w-60 justify-center items-center gap-2 p-1 shadow-lg">
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
