import { ModeToggle } from "@/components/mode-toggle";
import LanguageSelect from "@/components/shared/LanguageSelect";
import MessageDropdown from "@/components/shared/MessageDropdown";
import NotificationDropdown from "@/components/shared/NotificationDropdown";
import ProfileDropdown from "@/components/shared/ProfileDropdown";
import SearchBox from "@/components/shared/SearchBox";
import SidebarToggle from "@/components/shared/SidebarToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
    return (
        <div className="navbar-header border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between sm:h-18 h-13 shrink-0 gap-2 md:px-6 px-4 py-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-18 dark:bg-[#273142]">
            <div className="col-auto">
                <div className="flex flex-wrap items-center gap-[16px]">

                    <SidebarToggle />
                     <SidebarTrigger />

                    <SearchBox />
                </div>
            </div>

            <div className="col-auto">
                <div className="flex flex-wrap items-center gap-3">

                    {/* Light & Dark Mode */}
                    <ModeToggle />

                    {/* Language Dropdown Start   */}
                    <LanguageSelect />
                    {/* Language Dropdown End   */}

                    {/* Message Dropdown Start   */}
                    <MessageDropdown />
                    {/* Message Dropdown End   */}

                    {/* Notification Start   */}
                    <NotificationDropdown />
                    {/* Notification End   */}

                    {/* Profile dropdown start */}
                    <ProfileDropdown />
                    {/* Profile dropdown end */}

                </div>
            </div>
        </div>
    );
};

export default Header;