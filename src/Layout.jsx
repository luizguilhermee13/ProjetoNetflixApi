import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; //importando componente do sidebar shadcn
import { AppSidebar } from "@/components/ui/app-sidebar"; //importando componente do sidebar shadcn
import { Routes, Route, Link } from "react-router-dom"; //importando browser router
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import CategotyPage from "./pages/category";
import FavoritePage from "./pages/favorite";
import ContatoPage from "./pages/contact";

//o componente que eu quero que renderize, com um children, pois a sidebar  solicita que venha com um parametro children
export default function Layout({ children }) {
  const SIDEBAR_WIDTH = "16rem"; //para alterar o width da sidebar
  const SIDEBAR_WIDTH_MOBILE = "18rem"; //para alterar o width da sidebar

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "18rem", //para alterar o width da sidebar
        "--sidebar-width-mobile": "30rem", //para alterar o width da sidebar
      }}
    >
      <AppSidebar />
      <main className="w-[1280px]">
        <SidebarTrigger />
        {
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SearchPage" element={<SearchPage />} />
            <Route path="/CategotyPage" element={<CategotyPage />} />
            <Route path="/FavoritePage" element={<FavoritePage />} />
            <Route path="/ContatoPage" element={<ContatoPage />} />
          </Routes>
        }
      </main>
    </SidebarProvider>
  );
}

//na main eu criei a rotas da minha pagina
