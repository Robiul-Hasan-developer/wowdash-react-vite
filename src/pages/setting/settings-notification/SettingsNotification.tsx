import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import ClientFirebaseWrapper from "./ClientFirebaseWrapper";

const SettingsNotification = () => {
    return (
        <>
            <Breadcrumb title="Settings Notification" text="Settings Notification" />

            <Suspense fallback={<LoadingSkeleton />}>
                <div className="rounded-xl border border-border bg-white dark:bg-[#273142] p-6 shadow-sm">
                    <ClientFirebaseWrapper />
                </div>
            </Suspense>

        </>
    );
};

export default SettingsNotification;