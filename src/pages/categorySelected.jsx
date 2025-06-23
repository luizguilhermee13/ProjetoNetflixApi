import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoriaSelecionada() {
  const { id } = useParams(); //  pega o id da URL
  const [teste, setTeste] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q0NjFiNTQzY2Q3Yzk0ZjgyNDA0MmJlZjRjMDljMSIsIm5iZiI6MTc0OTc1MTg2Ni44NDUsInN1YiI6IjY4NGIxODNhM2E4YjIyOWM1N2JiNDI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmaXeBBcbDm3YagAJ-2AH9SKJ5u1n5_PyoNHXqXBRmw",
    },
  };

  useEffect(() => {
    function teste2() {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=pt-BR`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          setTeste(res.results);
        })

        .catch((err) => console.error(err));
    }

    teste2();
  }, [id]);

  return (
    <div className="w-[80%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4">
      {teste.map((teste, index) => (
        <div key={index} teste={teste} className="w-full h-full">
          <Card className="w-[200px] h-full">
            <CardContent className=" p-2">
              <div className="checando text-2xl font-semibold w-full h-full ">
                <Link to={`/MovieSelected/${teste.id}`}>
                  <h2>{teste.title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${teste.backdrop_path}`}
                    alt={teste.original_title}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
