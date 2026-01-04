import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const AverageDailySalesCard = lazy(() => import("./components/AverageDailySalesCard"))
const MonthlyCampaignStateCard = lazy(() => import("./components/MonthlyCampaignStateCard"))
const RecentActivityCard = lazy(() => import("./components/RecentActivityCard"))
const RevenueStatisticCard = lazy(() => import("./components/RevenueStatisticCard"))
const SalesByCountriesCard = lazy(() => import("./components/SalesByCountriesCard"))
const SourceVisitorsCard = lazy(() => import("./components/SourceVisitorsCard"))
const SupportTrackerCard = lazy(() => import("./components/SupportTrackerCard"))
const TransactionsCard = lazy(() => import("./components/TransactionsCard"))
const UpgradePlanCard = lazy(() => import("./components/UpgradePlanCard"))

const Analytics = () => {
    return (
        <>
            <Breadcrumb title="Analytics" text="Analytics" />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <UpgradePlanCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RevenueStatisticCard />
                    </Suspense>
                </div>

                <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <SupportTrackerCard />
                    </Suspense>
                </div>

                <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <AverageDailySalesCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TransactionsCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <SalesByCountriesCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <SourceVisitorsCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <MonthlyCampaignStateCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RecentActivityCard />
                    </Suspense>
                </div>

            </div>
        </>
    );
};

export default Analytics;