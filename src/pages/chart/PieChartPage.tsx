import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const PieChartPage = () => {
    return (
        <>
            <Breadcrumb title="Pie Chart" text="Pie Chart" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
            
            </Suspense>

        </>
    );
};

export default PieChartPage;