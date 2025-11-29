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
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel
} from "@/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { data } from "@/data/SidebarData"


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
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

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}