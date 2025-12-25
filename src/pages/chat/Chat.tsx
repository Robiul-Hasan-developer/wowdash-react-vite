import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const ChatBox = lazy(() => import("./components/ChatBox"));

const Chat = () => {
    return (
        <>
            <Breadcrumb title="Chat" text="Chat" />

            <Suspense fallback={<LoadingSkeleton />}>
                <ChatBox />
            </Suspense>

        </>
    );
};

export default Chat;