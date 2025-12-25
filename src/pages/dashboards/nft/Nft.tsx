import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import EthPriceCard from "./components/EthPriceCard";
import FeaturedCreatorsCard from "./components/FeaturedCreatorsCard";
import NftPromoBanner from "./components/NftPromoBanner";
import RecentBidCard from "./components/RecentBidCard";
import StatisticsCard from "./components/StatisticsCard";
import TopCreatorsCard from "./components/TopCreatorsCard";
import TrendingBidWidgets from "./components/TrendingBidWidgets";
import TrendingNftCard from "./components/TrendingNftCard";

const Nft = () => {
    return (
        <>
            <Breadcrumb title="NFT" text="NFT" />

            <div className="gap-6 grid grid-cols-1 2xl:grid-cols-12">
                <div className="col-span-12 2xl:col-span-8">
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <NftPromoBanner />
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <TrendingBidWidgets />
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <TrendingNftCard />
                            </Suspense>
                        </div>

                        <div className="col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <RecentBidCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 2xl:col-span-4">
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <EthPriceCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <StatisticsCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <FeaturedCreatorsCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <TopCreatorsCard />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Nft;