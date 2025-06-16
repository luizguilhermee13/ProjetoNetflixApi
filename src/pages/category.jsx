import CarouselSize from "@/components/ui/componentCarousel"; //trazendo o corousel do shadcn para o arquivo
import { useState } from "react"; //hook
import { useEffect } from "react"; //hook

export default function CategotyPage() {
  /*variavel genero na qual estou utilizando useState para trabalhar com o estado da variavel, assim,
  conseguindo alterar o valor dela*/
  const [genero, setGenero] = useState([]);
  // a variavel option é utilizada para validação da api, pois é com ela que faço uso da chave de acesso por exemplo
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q0NjFiNTQzY2Q3Yzk0ZjgyNDA0MmJlZjRjMDljMSIsIm5iZiI6MTc0OTc1MTg2Ni44NDUsInN1YiI6IjY4NGIxODNhM2E4YjIyOWM1N2JiNDI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmaXeBBcbDm3YagAJ-2AH9SKJ5u1n5_PyoNHXqXBRmw",
    },
  };

  //utilizei um hook useEffect chamando [] vazio para chamar api e carregar apenas uma vez quando for alterado alguma coisa
  useEffect(() => {
    function chamandoApi() {
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=pt-br",
        options
      )
        .then((res) => res.json()) //convertendo para json
        .then((res) => {
          setGenero(res.genres); //pegando os generos da api e passando para a minha variavel genero
        })

        .catch((err) => console.error(err));
    }

    chamandoApi(); //chamando a função que chama a api
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-orange-300">
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 my-2">
          {genero.map((genero, index) => (
            <CarouselSize key={index} genero={genero}></CarouselSize>
          ))}
        </div>
      </div>
    </div>
  );
}
/*<div className="w-full flex flex-col justify-center items-center gap-2 my-2">
          {genero.map((genero, index) => (
            <CarouselSize key={index} genero={genero}></CarouselSize>
          ))}
        </div>
        
Nesse trecho, estou utilizando um map para percorrer os gêneros da API e renderizar em carouselSize. Visto que o 
índice e o gênero estão como parâmetro para a função carouselSize, que cria os cards shadcn na tela. Pois, em 
carouselSize, eu crio os cards e peço para renderizar em categoryPage.Por serem 19 gêneros, vai passar por esses 19, 
criando 19 
 */
