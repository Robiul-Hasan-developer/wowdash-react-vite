import Breadcrumb from "@/layouts/Breadcrumb";
import LoadingSkeleton from "@/loading/LoadingSkeleton";
import { Suspense } from "react";
import CalendarSidebar from "./components/CalendarSidebar";
import BasicFullCalendar from "./components/BasicFullCalendar";

const Calendar = () => {
    return (
        <>
            <Breadcrumb title="Calendar" text="Calendar" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
                        <CalendarSidebar />
                    </div>

                    <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                        <BasicFullCalendar />
                    </div>

                </div>
            </Suspense>

        </>
    );
};

export default Calendar;