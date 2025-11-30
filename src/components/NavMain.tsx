// import { NavLink } from "react-router-dom";

// const Nav = () => {
//     return (
//         <div className="max-w-[1320px] mx-auto py-6">
//             <nav className="flex items-center gap-4">
//                 <NavLink to="/" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>Home</NavLink>
//                 <NavLink to="/crm" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>CRM</NavLink>
//                 <NavLink to="/ecommerce" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>Ecommerce</NavLink>
//             </nav>
//         </div>
//     );
// };

// export default Nav;





"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
// import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";
import { cn } from "@/lib/utils";
import { ChevronRight, type LucideIcon } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarItem {
  title?: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    circleColor: string;
  }[];
  label?: string;
};

export function NavMain({ items }: { items: SidebarItem[] }) {
  const pathname = '/';
//   const isCollapsed = /;
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const handleToggleGroup = (title?: string) => {
    if (!title) return;
    setOpenGroup((prev) => (prev === title ? null : title));
  };

  return (
    <SidebarGroup className={'p-0'}>
      <SidebarMenu>
        {items.map((item) => {
          const isGroupActive = item.items?.some(
            (subItem) =>
              pathname === subItem.url || pathname.startsWith(subItem.url)
          );

          if (item.items && item.items.length > 0) {
            const isOpen = openGroup === item.title || isGroupActive;

            return (
              <Collapsible
                key={item.title}
                asChild
                open={isOpen}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      onClick={() => handleToggleGroup(item.title)}
                      className={cn(
                        "cursor-pointer py-5.5 px-3 text-base text-[#4b5563] dark:text-white data-[state=open]:bg-primary data-[state=open]:text-white hover:data-[state=open]:bg-primary dark:hover:data-[state=open]:bg-primary hover:data-[state=open]:text-white hover:bg-primary/10 active:bg-primary/10 dark:hover:bg-slate-700",
                        isOpen
                          ? "bg-primary text-white hover:bg-primary hover:text-white dark:bg-primary dark:hover:bg-primary"
                          : ""
                      )}
                    >
                      {item.icon && <item.icon className="!w-4.5 !h-4.5" />}
                      <span>{item.title}</span>
                      <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="gap-0 mt-2 space-y-1 px-0">
                      {item.items.map((subItem) => {
                        const isSubActive =
                          pathname === subItem.url ||
                          pathname.startsWith(subItem.url);
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                "py-5.5 px-3 text-base text-[#4b5563] dark:text-white hover:bg-primary/10 active:bg-primary/10 dark:hover:bg-slate-700",
                                isSubActive
                                  ? "bg-primary/10 font-bold dark:bg-slate-600"
                                  : ""
                              )}
                            >
                              <Link
                                to={subItem.url}
                                className="flex items-center gap-3.5"
                              >
                                <span
                                  className={`w-2 h-2 rounded-[50%] ${subItem.circleColor}`}
                                ></span>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          if (item.label) {
            return (
              <SidebarGroupLabel key={`label-${item.label}`}>
                {item.label}
              </SidebarGroupLabel>
            );
          }

          if (item.url && item.title) {
            const isMenuActive =
              pathname === item.url || pathname.startsWith(item.url);

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "cursor-pointer py-5.5 px-3 text-base text-[#4b5563] dark:text-white hover:bg-primary/10 active:bg-primary/10 dark:hover:bg-slate-700",
                    isMenuActive
                      ? "bg-primary hover:bg-primary text-white dark:hover:bg-primary hover:text-white"
                      : ""
                  )}
                >
                  <Link to={item.url} className="flex items-center gap-2">
                    {item.icon && <item.icon className="!w-4.5 !h-4.5" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return null;
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
