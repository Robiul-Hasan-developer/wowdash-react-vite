import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const ColumnChartPage = () => {
    return (
        <>
            <Breadcrumb title="Column Chart" text="Column Chart" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            
            </Suspense>

        </>
    );
};

export default ColumnChartPage;