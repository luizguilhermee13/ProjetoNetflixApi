import * as React from "react";

import { Card, CardContent } from "@/components/ui/card"; //outro component o shadcn que tive que importar p/usar aqui
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//generos está trazendo dados da genres da api, pois estou fazendo a solicitação no arquivo category e trazendo p/cá
export default function CarouselSize({ genero }) {
  //array rsponsavel pelas imagens nos cars
  const image = [
    "/assets/hxh.jpg",
    "/assets/Naruto.jpg",
    "/assets/BlackClover.jpg",
    "/assets/Bleach.jpg",
    "/assets/Fullmetal.jpg",
    "/assets/Jojos4t.jpg",
    "/assets/noragami.jpg",
    "/assets/saitama.jpg",
    "/assets/JujutsuKaisen.jpg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[800px]"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-[180px] h-[240px]">
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <div
                    key={index}
                    className="text-2xl font-semibold w-full h-full "
                  >
                    <h2 className="flex justify-center m-0">{genero.name}</h2>
                    <img
                      src={image[index]}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

/* é dentro de CarouselContent que eu modifico  coloco os dados que quero,
Card é de outro component do shadcn que instalei especificamente para utilizar aqui nos corousel,
dentro do CorouselContent tem um map  que eu consigo definir a quantidade de cards que 
gostaria que aparecesse e o map tambem passa por todos os cards que eu fiz,por exemplo,
definir que a quantidade vai ser 8 cards,logo o map vai passar por esses 8 */
