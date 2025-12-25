import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import LatestInvestmentsCard from "./components/LatestInvestmentsCard";
import MostLocationCard from "./components/MostLocationCard";
import MyPortfolioCard from "./components/MyPortfolioCard";
import NoticeBoardCard from "./components/NoticeBoardCard";
import ProjectStatusCard from "./components/ProjectStatusCard";
import RevenueStatisticsCard from "./components/RevenueStatisticsCard";
import StaticCard from "./components/StaticCard";
import StatsCard from "./components/StatsCard";
import TotalTransactionsCard from "./components/TotalTransactionsCard";

const Investment = () => {
    return (
        <>
            <Breadcrumb title="Investment" text="Investment" />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
                <Suspense fallback={<LoadingSkeleton />}>
                    <StatsCard />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RevenueStatisticsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <StaticCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <MostLocationCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <MyPortfolioCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <LatestInvestmentsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <NoticeBoardCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TotalTransactionsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <ProjectStatusCard />
                    </Suspense>
                </div>
            </div>

        </>
    );
};

export default Investment;