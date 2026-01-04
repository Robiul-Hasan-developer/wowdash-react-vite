import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const CoinAnalyticsCard = lazy(() => import("./components/CoinAnalyticsCard"))
const MarketInfoCard = lazy(() => import("./components/MarketInfoCard"))
const MasterCard = lazy(() => import("./components/MasterCard"))
const MyOrderCard = lazy(() => import("./components/MyOrderCard"))
const RecentTransactionCard = lazy(() => import("./components/RecentTransactionCard"))
const StatsCard = lazy(() => import("./components/StatsCard"))
const TotalBalanceCard = lazy(() => import("./components/TotalBalanceCard"))
const UsersActivateCard = lazy(() => import("./components/UsersActivateCard"))

const Cryptocurrency = () => {
    return (
        <>
            <Breadcrumb title="Cryptocurrency" text="Cryptocurrency" />

            <Suspense fallback={<LoadingSkeleton />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                    <StatsCard />
                </div>
            </Suspense>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
                <div className="xl:col-span-12 2xl:col-span-8">
                    <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <CoinAnalyticsCard />
                            </Suspense>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <MarketInfoCard />
                            </Suspense>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <MyOrderCard />
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <RecentTransactionCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-12 2xl:col-span-4">
                    <div className="space-y-6">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <MasterCard />
                        </Suspense>
                        <Suspense fallback={<LoadingSkeleton />}>
                            <TotalBalanceCard />
                        </Suspense>
                        <Suspense fallback={<LoadingSkeleton />}>
                            <UsersActivateCard />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cryptocurrency;
