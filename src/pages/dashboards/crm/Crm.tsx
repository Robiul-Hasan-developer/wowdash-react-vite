import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import TopPerformerCard from "../dashboard/components/TopPerformerCard";
import CampaignCard from "./components/CampaignCard";
import ClientPaymentStatusCard from "./components/ClientPaymentStatusCard";
import CountriesStatusCard from "./components/CountriesStatusCard";
import CustomerOverviewCard from "./components/CustomerOverviewCard";
import EarningStatisticsCard from "./components/EarningStatisticsCard";
import LastTransactionCard from "./components/LastTransactionCard";
import RevenueGrowthCard from "./components/RevenueGrowthCard";
import StatsCard from "./components/StatsCard";
import TodoListRecentCard from "./components/TodoListRecentCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="CRM" text="CRM" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                <div className="lg:col-span-12 2xl:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <StatsCard />
                        </Suspense>
                    </div>
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RevenueGrowthCard />
                    </Suspense>
                </div>

                <div className="lg:col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <EarningStatisticsCard />
                    </Suspense>
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <CampaignCard />
                            </Suspense>
                        </div>
                        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <CustomerOverviewCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <ClientPaymentStatusCard />
                    </Suspense>
                </div>

                <div className="lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <CountriesStatusCard />
                    </Suspense>
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopPerformerCard listClasses="space-y-6 max-h-[458px] overflow-y-auto scrollbar-thin scrollbar-invisible hover:scrollbar-visible" />
                    </Suspense>
                </div>

                <div className="lg:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TodoListRecentCard />
                    </Suspense>
                </div>

                <div className="lg:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <LastTransactionCard />
                    </Suspense>
                </div>

            </div>
        </>
    );
};

export default AiDashboard;