import WorldMap from "@/components/shared/WorldMap";
import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import SalesStaticCard from "./components/SalesStaticCard";
import StatCard from "./components/StatCard";
import TopPerformerCard from "./components/TopPerformerCard";
import TotalSubscriberCard from "./components/TotalSubscriberCard";
import UserOverviewCard from "./components/UserOverviewCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="AI" text="AI" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
                <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                    <StatCard />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
                <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <SalesStaticCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TotalSubscriberCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-6 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <UserOverviewCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-9">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        {/* <TabsWithTableCard /> */}
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-3">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopPerformerCard />
                    </Suspense>
                </div>

                <div className="xl:col-span-12 2xl:col-span-9">
                    <div className="p-6 bg-white">
                        <WorldMap />
                    </div>
                </div>



                {/* <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TopCountriesCard />
                    </Suspense>
                </div> */}

                {/* <div className="xl:col-span-12 2xl:col-span-6">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <GenerateContentCard />
                    </Suspense>
                </div> */}
            </div>
        </>
    );
};

export default AiDashboard;