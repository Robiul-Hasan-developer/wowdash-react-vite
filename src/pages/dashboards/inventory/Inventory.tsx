import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import StateCards from "./components/StateCards";
import TopSuppliersCard from "./components/top-suppliers-card";
import UsersCard from "./components/users-card";
import TopCustomerCard from "./components/top-customer-card";
import OverallReportCard from "./components/OverallReportCard";
import PurchaseSalesCard from "./components/PurchaseSalesCard";
import RecentTransactionsCard from "./components/RecentTransactionsCard";

const Inventory = () => {
    return (
        <>
            <Breadcrumb title="POS & Inventory" text="POS & Inventory" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="col-span-12">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <StateCards />
                    </Suspense>
                </div>


                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <IncomeExpenseCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <UsersCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopSuppliersCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopCustomerCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <OverallReportCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <PurchaseSalesCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RecentTransactionsCard />
                    </Suspense>
                </div>

            </div>

        </>
    );
};

export default Inventory;