import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import MostLocationCard from "./components/MostLocationCard";
import RevenueStatisticsCard from "./components/RevenueStatisticsCard";
import StatsCard from "./components/StatsCard";
import MyPortfolioCard from "./components/MyPortfolioCard";
import LatestInvestmentsCard from "./components/LatestInvestmentsCard";

const Investment = () => {
    return (
        <>
            <Breadcrumb title="Investment" text="Investment" />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
                <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                    <StatsCard />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RevenueStatisticsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <StaticCard /> */}
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <MostLocationCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <MyPortfolioCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <LatestInvestmentsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <NoticeBoardCard /> */}
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <TotalTransactionsCard /> */}
                    </Suspense>
                </div>
                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <ProjectStatusCard /> */}
                    </Suspense>
                </div>
            </div>

        </>
    );
};

export default Investment;