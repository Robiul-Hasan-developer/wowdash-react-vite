import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import OverallReportCard from "./components/OverallReportCard";
import PurchaseSalesCard from "./components/PurchaseSalesCard";
import RecentTransactionsCard from "./components/RecentTransactionsCard";
import StateCards from "./components/StateCards";
import TopCustomerCard from "./components/TopCustomerCard";
import TopSuppliersCard from "./components/TopSuppliersCard";
import UsersCard from "./components/users-card";

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