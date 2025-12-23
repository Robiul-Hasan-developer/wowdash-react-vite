import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import ValidateForm from "./ValidateForm";

const FormValidation = () => {
    return (
        <>
            <Breadcrumb title="FormValidation" text="FormValidation" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                <ValidateForm />
            </Suspense>

        </>
    );
};

export default FormValidation;