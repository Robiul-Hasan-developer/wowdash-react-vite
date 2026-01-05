import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const IncomeExpenseCard = lazy(() => import("./components/IncomeExpenseCard"))
const OverallReportCard = lazy(() => import("./components/OverallReportCard"))
const PurchaseSalesCard = lazy(() => import("./components/PurchaseSalesCard"))
const RecentTransactionsCard = lazy(() => import("./components/RecentTransactionsCard"))
const StateCards = lazy(() => import("./components/StateCards"))
const TopCustomerCard = lazy(() => import("./components/TopCustomerCard"))
const TopSuppliersCard = lazy(() => import("./components/TopSuppliersCard"))
const UsersCard = lazy(() => import("./components/UsersCard"))

const Inventory = () => {
    return (
        <>
            <Breadcrumb title="POS & Inventory" text="POS & Inventory" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="col-span-12">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <StateCards />
                    </Suspense>
                </div>
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <IncomeExpenseCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <UsersCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopSuppliersCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopCustomerCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <OverallReportCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <PurchaseSalesCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <RecentTransactionsCard />
                    </Suspense>
                </div>

            </div>
        </>
    );
};

export default Inventory;