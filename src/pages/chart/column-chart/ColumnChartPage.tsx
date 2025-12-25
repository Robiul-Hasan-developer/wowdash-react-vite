import DoubleBarChart from "@/components/charts/DoubleBarChart";
import FourColorBarChart from "@/components/charts/FourColorBarChart";
import SingleBarChart from "@/components/charts/SingleBarChart";
import UpdownBarChart from "@/components/charts/UpdownBarChart";
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
                    <Suspense fallback={<LoadingSkeleton />}>
                        <div className="-m-2">
                            <DoubleBarChart />
                        </div>
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Column Charts">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <div className="-m-4">
                            <SingleBarChart chartColor={"487FFF"} chartHeight={264} chartBorderRadius={8} chartColumnWidth={16} />
                        </div>
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Group Columns">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <div className="-m-4">
                            <FourColorBarChart chartHeight={300} />
                        </div>
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Simple Column">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <div className="-m-4">
                            <UpdownBarChart />
                        </div>
                    </Suspense>
                </DefaultCardComponent>
            </div>

        </>
    );
};

export default ColumnChartPage;