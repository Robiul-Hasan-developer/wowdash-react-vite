import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import CoinAnalyticsCard from "./components/CoinAnalyticsCard";
import MarketInfoCard from "./components/MarketInfoCard";
import MasterCard from "./components/MasterCard";
import MyOrderCard from "./components/MyOrderCard";
import RecentTransactionCard from "./components/RecentTransactionCard";
import StatsCard from "./components/StatsCard";
import TotalBalanceCard from "./components/TotalBalanceCard";
import UsersActivateCard from "./components/UsersActivateCard";

const Cryptocurrency = () => {
    return (
        <>
            <Breadcrumb title="Cryptocurrency" text="Cryptocurrency" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <Suspense fallback={<LoadingSkeleton />}>
                    <StatsCard />
                </Suspense>
            </div>

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
