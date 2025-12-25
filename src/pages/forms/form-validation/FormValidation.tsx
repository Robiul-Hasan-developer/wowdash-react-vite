import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import ValidateForm from "./ValidateForm";

const FormValidation = () => {
    return (
        <>
            <Breadcrumb title="FormValidation" text="FormValidation" />

            <Suspense fallback={<LoadingSkeleton />}>
                <ValidateForm />
            </Suspense>

        </>
    );
};

export default FormValidation;