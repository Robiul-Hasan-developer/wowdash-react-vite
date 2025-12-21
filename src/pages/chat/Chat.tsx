import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import ChatBox from "./components/ChatBox";

const Chat = () => {
    return (
        <>
            <Breadcrumb title="Chat" text="Chat" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                <ChatBox />
            </Suspense>

        </>
    );
};

export default Chat;