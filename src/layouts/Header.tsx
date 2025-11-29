import { ModeToggle } from "@/components/mode-toggle";
import LanguageSelect from "@/components/shared/LanguageSelect";
import MessageDropdown from "@/components/shared/MessageDropdown";
import SearchBox from "@/components/shared/SearchBox";
import SidebarToggle from "@/components/shared/SidebarToggle";

const Header = () => {
    return (
        <div className="navbar-header border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between sm:h-18 h-13 shrink-0 gap-2 md:px-6 px-4 py-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-18 dark:bg-[#273142]">
            <div className="col-auto">
                <div className="flex flex-wrap items-center gap-[16px]">

                    <SidebarToggle />

                    {/* <button type="button" className="sidebar-mobile-toggle d-flex !leading-[0]"></button> */}

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
                    <button data-dropdown-toggle="dropdownNotification" className="has-indicator flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700" type="button">
                    </button>
                    <div id="dropdownNotification" className="z-10 hidden w-full max-w-[394px] overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-neutral-700" data-popper-placement="bottom">
                        <div className="m-4 flex items-center justify-between gap-2 rounded-lg bg-primary-50 px-4 py-3 dark:bg-primary-600/25">
                            <h6 className="mb-0 text-lg font-semibold text-neutral-900">
                                Notification
                            </h6>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-primary-600 dark:bg-neutral-600 dark:text-white">05</span>
                        </div>
                        <div className="scroll-sm !border-t-0">
                            <div className="max-h-[400px] overflow-y-auto">
                                <a href="javascript:void(0)" className="flex justify-between gap-1 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-success-200 text-success-600 dark:bg-success-600/25">
                                            {/* <iconify-icon icon="bitcoin-icons:verify-outline" className="text-2xl"></iconify-icon> */}
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1 text-sm">Congratulations</h6>
                                            <p className="mb-0 line-clamp-1 text-sm">
                                                Your profile has been Verified. Your profile has been
                                                Verified
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="text-sm text-neutral-500">23 Mins ago</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="flex justify-between gap-1 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-shrink-0">
                                            <img className="h-11 w-11 rounded-full" src="assets/images/notification/profile-4.png" alt="Joseph image" />
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1 text-sm">Ronald Richards</h6>
                                            <p className="mb-0 line-clamp-1 text-sm">
                                                You can stitch between artboards
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="text-sm text-neutral-500">23 Mins ago</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="flex justify-between gap-1 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-600/25">
                                            AM
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1 text-sm">Arlene McCoy</h6>
                                            <p className="mb-0 line-clamp-1 text-sm">
                                                Invite you to prototyping
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="text-sm text-neutral-500">23 Mins ago</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="flex justify-between gap-1 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-shrink-0">
                                            <img className="h-11 w-11 rounded-full" src="assets/images/notification/profile-6.png" alt="Joseph image" />
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1 text-sm">Annette Black</h6>
                                            <p className="mb-0 line-clamp-1 text-sm">
                                                Invite you to prototyping
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="text-sm text-neutral-500">23 Mins ago</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="flex justify-between gap-1 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-600/25">
                                            DR
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1 text-sm">Darlene Robertson</h6>
                                            <p className="mb-0 line-clamp-1 text-sm">
                                                Invite you to prototyping
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="text-sm text-neutral-500">23 Mins ago</span>
                                    </div>
                                </a>
                            </div>

                            <div className="px-4 py-3 text-center">
                                <a href="javascript:void(0)" className="text-center font-semibold text-primary-600 hover:underline dark:text-primary-600">See All Notification
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Notification End   */}

                    <button data-dropdown-toggle="dropdownProfile" className="flex items-center justify-center rounded-full" type="button">
                        <img src="assets/images/user.png" alt="image" className="object-fit-cover h-10 w-10 rounded-full" />
                    </button>
                    <div id="dropdownProfile" className="dropdown-menu-sm z-10 hidden rounded-lg bg-white p-3 shadow-lg dark:bg-neutral-700" data-popper-placement="bottom">
                        <div className="mb-4 flex items-center justify-between gap-2 rounded-lg bg-primary-50 px-4 py-3 dark:bg-primary-600/25">
                            <div>
                                <h6 className="mb-0 text-lg font-semibold text-neutral-900">
                                    Robiul Hasan
                                </h6>
                                <span className="text-neutral-500">Admin</span>
                            </div>
                            <button type="button" className="hover:text-danger-600">
                                {/* <iconify-icon icon="radix-icons:cross-1" className="icon text-xl"></iconify-icon> */}
                            </button>
                        </div>

                        <div className="scroll-sm max-h-[400px] overflow-y-auto pe-2">
                            <ul className="flex flex-col">
                                <li>
                                    <a className="flex items-center gap-4 px-0 py-2 text-black hover:text-primary-600" href="view-profile.html">
                                        {/* <iconify-icon icon="solar:user-linear" className="icon text-xl"></iconify-icon> */}
                                        My Profile</a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-4 px-0 py-2 text-black hover:text-primary-600" href="email.html">
                                        {/* <iconify-icon icon="tabler:message-check" className="icon text-xl"></iconify-icon> */}
                                        Inbox</a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-4 px-0 py-2 text-black hover:text-primary-600" href="company.html">
                                        {/* <iconify-icon icon="icon-park-outline:setting-two" className="icon text-xl"></iconify-icon> */}
                                        Setting</a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-4 px-0 py-2 text-black hover:text-danger-600" href="javascript:void(0)">
                                        {/* <iconify-icon icon="lucide:power" className="icon text-xl"></iconify-icon> */}
                                        Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;