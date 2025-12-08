import Breadcrumb from "@/layouts/Breadcrumb";
import RevenueGrowthCard from "./components/RevenueGrowthCard";
import StatsCard from "./components/StatsCard";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="CRM" text="CRM" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                <div className="lg:col-span-12 2xl:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <StatsCard />
                    </div>
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    <RevenueGrowthCard />
                </div>

                <div className="lg:col-span-12 2xl:col-span-8">
                    {/* <EarningStatisticsCard /> */}
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                            {/* <CampaignCard /> */}
                        </div>
                        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                            {/* <CustomerOverviewCard /> */}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 2xl:col-span-4">
                    {/* <ClientPaymentStatusCard /> */}
                </div>

                <div className="lg:col-span-6 2xl:col-span-4">
                    {/* <CountriesStatusCard /> */}
                </div>

                <div className="lg:col-span-12 2xl:col-span-4">
                    {/* <TopPerformerCard /> */}
                </div>

                <div className="lg:col-span-12 2xl:col-span-6">
                    {/* <TodoListRecentCard /> */}
                </div>

                <div className="lg:col-span-12 2xl:col-span-6">
                    {/* <LastTransactionCard /> */}
                </div>

            </div>

        </>
    );
};

export default AiDashboard;