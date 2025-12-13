import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import NftPromoBanner from "./components/NftPromoBanner";
import RecentBidCard from "./components/RecentBidCard";
import TrendingBidWidgets from "./components/TrendingBidWidgets";
import TrendingNftCard from "./components/TrendingNftCard";
import EthPriceCard from "./components/EthPriceCard";
import StatisticsCard from "./components/StatisticsCard";
import FeaturedCreatorsCard from "./components/FeaturedCreatorsCard";

const Nft = () => {
    return (
        <>
            <Breadcrumb title="NFT" text="NFT" />

            <div className="gap-6 grid grid-cols-1 2xl:grid-cols-12">
                <div className="col-span-12 2xl:col-span-8">
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <NftPromoBanner />
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <TrendingBidWidgets />
                        </div>

                        <div className="col-span-12">
                            <TrendingNftCard />
                        </div>

                        <div className="col-span-12">
                            <RecentBidCard />
                        </div>
                    </div>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <EthPriceCard />
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <StatisticsCard />
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <FeaturedCreatorsCard />
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            {/* <TopCreatorsCard /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Nft;