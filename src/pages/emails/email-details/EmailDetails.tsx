import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import EmailSidebar from "../components/EmailSidebar";
import EmailSidebarOverlay from "../components/EmailSidebarOverlay";
import EmailSidebarToggleButton from "../components/EmailSidebarToggleButton";



import UserList1 from "@/assets/images/user-list/user-list1.png";
import UserList2 from "@/assets/images/user-list/user-list2.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Images, LinkIcon, MoveLeft, Printer, Send, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const EmailDetails = () => {
    return (
        <>
            <Breadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-6 relative">
                <EmailSidebarOverlay />

                {/* Sidebar */}
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <EmailSidebar />
                    </Suspense>
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <EmailSidebarToggleButton />
                    </Suspense>

                   
                </div>
            </div>

        </>
    );
};

export default EmailDetails;