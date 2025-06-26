import {
  Link,
  Album,
  Link2,
  Mail,
  Phone,
  Link as LinkIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function ContatoPage() {
  const contatos = [
    {
      title: "Linkedin",
      icon: Link,
      link: "https://www.linkedin.com/",
    },
    {
      title: "GitHub",
      icon: Album,
      link: "https://github.com",
    },
    { title: "Instagram", icon: Link2, link: "https://www.instagram.com/" },
    { title: "E-Mail", icon: Mail, link: "teste@gmail.com" },
    { title: "Telefone", icon: Phone, link: "(11)2345-2344" },
  ];

  return (
    <div
      className={`max-w-screen-xl h-full  flex flex-wrap 
    items-center justify-center  bg-gradient-to-r from-zinc-800 to-zinc-900`}
    >
      <div className="flex flex-col h-full justify-evenly">
        <div
          className={`text-white sm:text-4xl md:text-5xl lg:text-6xl  
          flex justify-center`}
        >
          <h1>Contatos</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-2 ">
          {contatos.map((contato, index) => (
            <CardsContato key={index} contato={contato} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardsContato({ contato }) {
  return (
    <Card
      className={`w-[200px] h-[200px] flex items-center justify-center my-2 
            shadow-md shadow-white hover:bg-zinc-700 hover:shadow-[#27275a] hover:text-yellow-50 
              `}
    >
      <CardContent>
        <a
          href={contato.link}
          target="_blank"
          className="p-2 flex flex-col items-center gap-2 cursor-pointer"
        >
          <contato.icon size={48} className="mb-2" />
          <h2>{contato.title}</h2>
          <span>{contato.link}</span>
        </a>
      </CardContent>
    </Card>
  );
}
