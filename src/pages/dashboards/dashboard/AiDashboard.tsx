import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import GenerateContentCard from "./components/GenerateContentCard";
import SalesStatisticCard from "./components/SalesStatisticCard";
import StatCard from "./components/StatCard";
import TabsWithTableCard from "./components/TabsWithTableCard";
import TopCountriesCard from "./components/TopCountriesCard";
import TopPerformerCard from "./components/TopPerformerCard";
import TotalSubscriberCard from "./components/TotalSubscriberCard";
import UserOverviewCard from "./components/UserOverviewCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="AI" text="AI" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
                <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                    <StatCard />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <SalesStatisticCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TotalSubscriberCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <UserOverviewCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TabsWithTableCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopPerformerCard listClasses="space-y-6 max-h-[408px] overflow-y-auto scrollbar-thin scrollbar-invisible hover:scrollbar-visible" />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopCountriesCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <GenerateContentCard />
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default AiDashboard;