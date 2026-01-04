import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const AvailableTreatmentsCard = lazy(() => import("./components/AvailableTreatmentsCard"))
const DoctorListCard = lazy(() => import("./components/DoctorListCard"))
const EarningStatisticCard = lazy(() => import("./components/EarningStatisticCard"))
const HealthReportsDocumentCard = lazy(() => import("./components/HealthReportsDocumentCard"))
const LatestAppointmentsCard = lazy(() => import("./components/LatestAppointmentsCard"))
const PatientVisitedDepartment = lazy(() => import("./components/PatientVisitedDepartment"))
const PatientVisitedGender = lazy(() => import("./components/PatientVisitedGender"))
const StatCards = lazy(() => import("./components/StatCards"))
const TotalIncomeCard = lazy(() => import("./components/TotalIncomeCard"))

const Medical = () => {
    return (
        <>
            <Breadcrumb title="Medical" text="Medical" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <StatCards />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <EarningStatisticCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <PatientVisitedDepartment />
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <PatientVisitedGender />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-4">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <DoctorListCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-8">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <LatestAppointmentsCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 2xl:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <TotalIncomeCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <AvailableTreatmentsCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton />}>
                                <HealthReportsDocumentCard />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Medical;