import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import CustomersStatisticsCard from "./components/CustomersStatisticsCard";
import RevenueReportCard from "./components/RevenueReportCard";
import RecentOrdersCard from "./components/RecentOrdersCard";
import TransactionsCard from "./components/TransactionsCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="eCommerce" text="eCommerce" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="md:col-span-12 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RevenueReportCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <CustomersStatisticsCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RecentOrdersCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TransactionsCard />
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <DailySalesCard /> */}
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <DistributionMapsCard /> */}
                    </Suspense>
                </div>

                <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <TopCustomersCard /> */}
                    </Suspense>
                </div>

                <div className="md:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <TopSellingProductCard /> */}
                    </Suspense>
                </div>

                <div className="md:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <StockReportCard /> */}
                    </Suspense>
                </div>

            </div>

        </>
    );
};

export default AiDashboard;