import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const GenerateContentCard = lazy(() => import("./components/GenerateContentCard"))
const SalesStatisticCard = lazy(() => import("./components/SalesStatisticCard"))
const StatCard = lazy(() => import("./components/StatCard"))
const TabsWithTableCard = lazy(() => import("./components/TabsWithTableCard"))
const TopCountriesCard = lazy(() => import("./components/TopCountriesCard"))
const TopPerformerCard = lazy(() => import("./components/TopPerformerCard"))
const TotalSubscriberCard = lazy(() => import("./components/TotalSubscriberCard"))
const UserOverviewCard = lazy(() => import("./components/UserOverviewCard"))

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="AI" text="AI" />

            {/* <ErrorBoundary fallback={<ErrorBoundary />}>
                <Suspense fallback={<LoadingSkeleton />}>
                 <StatCard />
                </Suspense>
            </ErrorBoundary> */}

            <Suspense fallback={<LoadingSkeleton />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
                    <StatCard />
                </div>
            </Suspense>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <SalesStatisticCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TotalSubscriberCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <UserOverviewCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TabsWithTableCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopPerformerCard listClasses="space-y-6 max-h-[408px] overflow-y-auto scrollbar-thin scrollbar-invisible hover:scrollbar-visible" />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopCountriesCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <GenerateContentCard />
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default AiDashboard;