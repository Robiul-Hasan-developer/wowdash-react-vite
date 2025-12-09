import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import StatsCard from "./components/StatsCard";
import CoinAnalyticsCard from "./components/CoinAnalyticsCard";

const Cryptocurrency = () => {
    return (
        <>
            <Breadcrumb title="Cryptocurrency" text="Cryptocurrency" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                    <StatsCard />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
                <div className="xl:col-span-12 2xl:col-span-8">
                    <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <CoinAnalyticsCard />
                            </Suspense>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <MarketInfoCard /> */}
                            </Suspense>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <MyOrderCard /> */}
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <RecentTransactionCard /> */}
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-12 2xl:col-span-4">
                    <div className="space-y-6">
                        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                            {/* <MasterCard /> */}
                        </Suspense>
                        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                            {/* <TotalBalanceCard /> */}
                        </Suspense>
                        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                            {/* <UsersActivateCard /> */}
                        </Suspense>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cryptocurrency;
