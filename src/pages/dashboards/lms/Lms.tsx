import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import WidgetsAverageChart from "./components/WidgetsAverageChart";

const Lms = () => {
    return (
        <>
            <Breadcrumb title="LMS" text="LMS" />

             <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <WidgetsAverageChart />
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    {/* <TrafficSourceCard /> */}
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    {/* <TopCategoriesCard /> */}
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    {/* <TopInstructorsCard /> */}
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    {/* <StudentProgressCard /> */}
                </div>
                <div className="col-span-12 2xl:col-span-8">
                    {/* <CoursesCard /> */}
                </div>
                <div className="col-span-12 2xl:col-span-4">
                    {/* <CourseActivityCard /> */}
                </div>
            </div>

        </>
    );
};

export default Lms;