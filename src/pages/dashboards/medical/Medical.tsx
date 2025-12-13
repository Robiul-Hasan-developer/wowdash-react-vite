import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import StatCards from "./components/StatCards";
import EarningStatisticCard from "./components/EarningStatisticCard";

const Medical = () => {
    return (
        <>
            <Breadcrumb title="NFT" text="NFT" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <StatCards />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <EarningStatisticCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <PatientVisitedDepartment /> */}
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <PatientVisitedGender /> */}
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-4">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <DoctorListCard /> */}
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-8">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <LatestAppointmentsCard /> */}
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 2xl:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <TotalIncomeCard /> */}
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <AvailableTreatmentsCard /> */}
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                {/* <HealthReportsDocumentCard /> */}
                            </Suspense>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Medical;