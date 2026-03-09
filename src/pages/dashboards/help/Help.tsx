import LazyWrapper from "@/components/LazyWrapper";
import Breadcrumb from "@/layouts/Breadcrumb";
import { lazy } from "react";
const TaskSummaryCard = lazy(() => import("./components/TaskSummaryCard"))

const Help = () => {
    return (
        <>
            <Breadcrumb title="Booking" text="Booking" />

            {/* <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <LazyWrapper>
                    <StatisticsCards />
                </LazyWrapper>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                    <LazyWrapper>
                        <TaskSummaryCard />
                    </LazyWrapper>
                </div>

                <div className="col-span-12 lg:col-span-4">
                    <LazyWrapper>
                        <div className="shadow-7 p-5 rounded-xl bg-white dark:bg-[#273142] h-full">
                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                <h6 className="mb-0 font-bold text-lg">Ticket Priority</h6>
                            </div>
                            <div className="relative text-style label-bold">
                                {/* <TicketPriorityChart /> */}
                            </div>
                        </div>
                    </LazyWrapper>
                </div>

                <div className="col-span-12 lg:col-span-4">
                    {/* <LazyWrapper>
                        <TicketStatusCard />
                    </LazyWrapper> */}
                </div>

                <div className="col-span-12 lg:col-span-8">
                    {/* <LazyWrapper>
                        <PendingSolvedTicketsCard />
                    </LazyWrapper> */}
                </div>

                <div className="col-span-12 lg:col-span-8">
                    {/* <LazyWrapper>
                        <TodoListCard />
                    </LazyWrapper> */}
                </div>

                <div className="col-span-12 lg:col-span-4">
                    {/* <LazyWrapper>
                        <TopPodcasterCard />
                    </LazyWrapper> */}
                </div>

                <div className="col-span-12 lg:col-span-8">
                    {/* <LazyWrapper>
                        <PerformanceAgentsCard />
                    </LazyWrapper> */}
                </div>

                <div className="col-span-12 lg:col-span-4">
                    {/* <LazyWrapper>
                        <ResponseTimeCard />
                    </LazyWrapper> */}
                </div>
            </div>

        </>
    );
};

export default Help;