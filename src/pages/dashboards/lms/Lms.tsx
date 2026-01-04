import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { lazy, Suspense } from "react";
const CourseActivityCard = lazy(() => import("./components/CourseActivityCard"))
const CoursesCard = lazy(() => import("./components/CoursesCard"))
const StudentProgressCard = lazy(() => import("./components/StudentProgressCard"))
const TopCategoriesCard = lazy(() => import("./components/TopCategoriesCard"))
const TopInstructorsCard = lazy(() => import("./components/TopInstructorsCard"))
const TrafficSourceCard = lazy(() => import("./components/TrafficSourceCard"))
const WidgetsAverageChart = lazy(() => import("./components/WidgetsAverageChart"))

const Lms = () => {
    return (
        <>
            <Breadcrumb title="LMS" text="LMS" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <div className="">
                            <WidgetsAverageChart />
                        </div>
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TrafficSourceCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopCategoriesCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <TopInstructorsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <StudentProgressCard />
                    </Suspense>
                </div>
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <CoursesCard />
                    </Suspense>
                </div>
                <div className="col-span-12 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <CourseActivityCard />
                    </Suspense>
                </div>
            </div>

        </>
    );
};

export default Lms;