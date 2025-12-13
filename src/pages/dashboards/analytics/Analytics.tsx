import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import AverageDailySalesCard from "./components/AverageDailySalesCard";
import RevenueStatisticCard from "./components/RevenueStatisticCard";
import SupportTrackerCard from "./components/SupportTrackerCard";
import TransactionsCard from "./components/TransactionsCard";
import UpgradePlanCard from "./components/UpgradePlanCard";
import SalesByCountriesCard from "./components/SalesByCountriesCard";
import SourceVisitorsCard from "./components/SourceVisitorsCard";

const Analytics = () => {
    return (
        <>
            <Breadcrumb title="Analytics" text="Analytics" />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <UpgradePlanCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RevenueStatisticCard />
                    </Suspense>
                </div>

                <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <SupportTrackerCard />
                    </Suspense>
                </div>

                <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <AverageDailySalesCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TransactionsCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <SalesByCountriesCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <SourceVisitorsCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <MonthlyCampaignStateCard /> */}
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <RecentActivityCard /> */}
                    </Suspense>
                </div>

            </div>


        </>
    );
};

export default Analytics;