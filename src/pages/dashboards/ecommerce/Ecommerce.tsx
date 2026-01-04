import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const CustomersStatisticsCard = lazy(() => import("./components/CustomersStatisticsCard"))
const DailySalesCard = lazy(() => import("./components/DailySalesCard"))
const DistributionMapsCard = lazy(() => import("./components/DistributionMapsCard"))
const RecentOrdersCard = lazy(() => import("./components/RecentOrdersCard"))
const RevenueReportCard = lazy(() => import("./components/RevenueReportCard"))
const StockReportCard = lazy(() => import("./components/StockReportCard"))
const TopCustomersCard = lazy(() => import("./components/TopCustomersCard"))
const TopSellingProductCard = lazy(() => import("./components/TopSellingProductCard"))
const TransactionsCard = lazy(() => import("./components/TransactionsCard"))

const Ecommerce = () => {
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

export default Ecommerce;