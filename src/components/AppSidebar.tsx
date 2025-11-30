// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
// } from "@/components/ui/sidebar"

// export function AppSidebar() {
//     return (
//         <Sidebar>
//             <SidebarHeader />
//             <SidebarContent>
//                 <SidebarGroup />
//                 <SidebarGroup />
//             </SidebarContent>
//             <SidebarFooter />
//         </Sidebar>
//     )
// }


import {
    Sidebar,
    SidebarContent
} from "@/components/ui/sidebar"
import { data } from "@/data/SidebarData"
import { cn } from "@/lib/utils"
import { NavMain } from "./NavMain"


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className={cn(`scrollbar-thin scrollbar-invisible hover:scrollbar-visible`)}>
                {/* <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent> */}

                <NavMain items={data.navMain} />

            </SidebarContent>
        </Sidebar>
    )
}