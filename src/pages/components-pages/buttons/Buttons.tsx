import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const Buttons = () => {
    return (
        <>
            <Breadcrumb title="Buttons" text="Buttons" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>

            </Suspense>

        </>
    );
};

export default Buttons;