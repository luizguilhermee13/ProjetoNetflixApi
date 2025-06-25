import {
  Tags,
  Home,
  Mail,
  Search,
  Heart,
  Link as LinkIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "/SearchPage",
    icon: Search,
  },
  {
    title: "Categorias",
    url: "/CategotyPage",
    icon: Tags,
  },
  {
    title: "Favoritos",
    url: "/FavoritePage",
    icon: Heart,
  },
  {
    title: "Contato",
    url: "/ContatoPage",
    icon: Mail,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-center md:text-[0.8em] sm:text-[10px] ">
          <label>Usuario teste</label>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
