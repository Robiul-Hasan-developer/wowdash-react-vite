// import Logout from "@/components/auth/logout";
import userImg from "@/assets/images/user.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/firebase";
import { cn } from "@/lib/utils";
import { signOut } from "firebase/auth";
import { LogOutIcon, Mail, Settings, User } from "lucide-react";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ProfileDropdown = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      setLoggingOut(true);
      signOut(auth).then(() => {
        navigate('/auth/login');
        toast.success('You logged out successfully.')
      }).catch((error) => {
        console.log(error);
      });
    }, 1000);
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>{`Error: ${error}`}</p>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full sm:w-10 sm:h-10 w-8 h-8 bg-gray-200/75 hover:bg-slate-200 focus-visible:ring-0 dark:bg-slate-700 dark:hover:bg-slate-600 border-0 cursor-pointer data-[state=open]:bg-gray-300 data-[state=open]:ring-4 data-[state=open]:ring-slate-300 dark:data-[state=open]:ring-slate-500 dark:data-[state=open]:bg-slate-600"
          )}
        >
          <img
            src={userImg}
            className="rounded-full"
            width={40}
            height={40}
            alt={"User profile"}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="sm:w-[300px] min-w-[250px] right-[40px] absolute p-4 rounded-2xl overflow-hidden shadow-lg"
        side="bottom"
        align="end"
      >
        <div className="py-3 px-4 rounded-lg bg-primary/10 dark:bg-primar flex items-center justify-between">
          <div>
            <h6 className="text-lg text-neutral-900 dark:text-white font-semibold mb-0">
              {
                user ? user.displayName : "User Name"
              }
              {/* {`${user.email}`} */}
            </h6>
            <span className="text-sm text-neutral-500 dark:text-neutral-300">
              Admin
            </span>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto scroll-sm pt-4">
          <ul className="flex flex-col gap-3">
            <li className="flex">
              <Link
                to="/view-profile"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3 w-full"
              >
                <User className="w-5 h-5" /> My Profile
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/email"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3 w-full"
              >
                <Mail className="w-5 h-5" /> Inbox
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/company"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3 w-full"
              >
                <Settings className="w-5 h-5" /> Settings
              </Link>
            </li>
            <li className="flex">
              <Button
                variant="ghost"
                className={`!p-0 h-auto w-full justify-start font-normal !bg-transparent cursor-pointer dark:text-neutral-200 flex items-center gap-3 text-[16px] hover:text-red-600 focus:text-red-600 ${loggingOut ? 'text-red-600 focus:text-red-600' : 'text-black'}`}
                onClick={handleLogout}>
                <LogOutIcon className="size-5" />
                {loggingOut ? 'Logging out...' : "Logout"}
              </Button>
            </li>
          </ul>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
