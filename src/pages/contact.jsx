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
    <div className="max-w-screen-xl h-svh mb-2 bg-zinc-900 flex gap-4 flex-wrap items-center justify-center ">
      {contatos.map((contato, index) => (
        <Card
          key={index}
          className="w-[200px] h-[200px] flex items-center justify-center my-2"
        >
          <CardContent className="p-2 flex flex-col items-center gap-2">
            <contato.icon size={48} className="mb-2" />
            <h2>{contato.title}</h2>
            <span>{contato.link}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
