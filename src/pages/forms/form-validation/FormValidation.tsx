import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const FormValidation = () => {
    return (
        <>
            <Breadcrumb title="FormValidation" text="FormValidation" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            
            </Suspense>

        </>
    );
};

export default FormValidation;