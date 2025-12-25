import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import CourseActivityCard from "./components/CourseActivityCard";
import CoursesCard from "./components/CoursesCard";
import StudentProgressCard from "./components/StudentProgressCard";
import TopCategoriesCard from "./components/TopCategoriesCard";
import TopInstructorsCard from "./components/TopInstructorsCard";
import TrafficSourceCard from "./components/TrafficSourceCard";
import WidgetsAverageChart from "./components/WidgetsAverageChart";

const Lms = () => {
    return (
        <>
            <Breadcrumb title="LMS" text="LMS" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton />}>
                        <WidgetsAverageChart />
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