import GradientChart from "@/components/charts/GradientChart";
import LineChart from "@/components/charts/LineChart";
import LineChartAnimation from "@/components/charts/LineChartAnimation";
import LineChartLabel from "@/components/charts/LineChartLabel";
import SteplineChart from "@/components/charts/SteplineChart";
import ZoomableChart from "@/components/charts/ZoomableChart";
import DefaultCardComponent from "@/components/shared/DefaultCardComponent";
import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const LineChartPage = () => {
    return (
        <>
            <Breadcrumb title="Line Chart" text="Line Chart" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefaultCardComponent title="Default Line Chart">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <LineChart />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Zoomable Chart">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <ZoomableChart />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Line Chart with Data Labels">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <LineChartLabel />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Line Chart Animation">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <LineChartAnimation />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Stepline Charts">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <SteplineChart />
                    </Suspense>
                </DefaultCardComponent>
                <DefaultCardComponent title="Gradient Charts">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <GradientChart />
                    </Suspense>
                </DefaultCardComponent>
            </div>
        </>
    );
};

export default LineChartPage;