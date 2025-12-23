import GenerateContentChart from "@/components/charts/GenerateContentChart";
import DefaultCardComponent from "@/components/shared/DefaultCardComponent";
import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const ColumnChartPage = () => {
    return (
        <>
            <Breadcrumb title="Column Chart" text="Column Chart" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefaultCardComponent title="Column Charts">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <GenerateContentChart />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Column Charts">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <ColumnGroupBarChart /> */}
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Group Columns">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <GroupColumnChart /> */}
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Simple Column">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <RevenueStatisticsChartUpdown /> */}
                    </Suspense>
                </DefaultCardComponent>
            </div>

        </>
    );
};

export default ColumnChartPage;