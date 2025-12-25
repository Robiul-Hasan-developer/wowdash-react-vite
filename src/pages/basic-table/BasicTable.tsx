import DefaultCardComponent from "@/components/shared/DefaultCardComponent";
import BorderedColorTable from "@/components/tables/BorderedColorTable";
import BorderedTable from "@/components/tables/BorderedTable";
import DefaultTable from "@/components/tables/DefaultTable";
import RecentOrdersTable from "@/components/tables/RecentOrdersTable";
import TopSellingProductTable from "@/components/tables/TopSellingProductTable";
import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";

const BasicTable = () => {
    return (
        <>
            <Breadcrumb title="Basic Table" text="Basic Table" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Default Table">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <DefaultTable />
                        </Suspense>
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Bordered Tables">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <BorderedTable />
                        </Suspense>
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Tables Border Colors">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <BorderedColorTable />
                        </Suspense>
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Striped Rows">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <TopSellingProductTable />
                        </Suspense>
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12">
                    <DefaultCardComponent title="Card Tables">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <RecentOrdersTable />
                        </Suspense>
                    </DefaultCardComponent>
                </div>
            </div>

        </>
    );
};

export default BasicTable;