import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import CustomersStatisticsCard from "./components/CustomersStatisticsCard";
import DailySalesCard from "./components/DailySalesCard";
import DistributionMapsCard from "./components/DistributionMapsCard";
import RecentOrdersCard from "./components/RecentOrdersCard";
import RevenueReportCard from "./components/RevenueReportCard";
import StockReportCard from "./components/StockReportCard";
import TopCustomersCard from "./components/TopCustomersCard";
import TopSellingProductCard from "./components/TopSellingProductCard";
import TransactionsCard from "./components/TransactionsCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="eCommerce" text="eCommerce" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="md:col-span-12 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RevenueReportCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <CustomersStatisticsCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RecentOrdersCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TransactionsCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <DailySalesCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <DistributionMapsCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopCustomersCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopSellingProductCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <StockReportCard />
                    </Suspense>
                </div>

            </div>

        </>
    );
};

export default AiDashboard;