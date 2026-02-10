import CommonLink from "@/components/shared/CommonLink";
import PaymentHistoryTable from "@/components/tables/PaymentHistoryTable";
import { Card, CardContent } from "@/components/ui/card";

const TransactionHistoryCard: React.FC = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0 block">
            <CardContent className="card-body p-0 h-full">
                <div>
                    {/* Header */}
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Payment History</h6>
                            <CommonLink />
                        </div>
                    </div>

                    {/* Users list */}
                    <div className="p-6">
                        <PaymentHistoryTable />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TransactionHistoryCard;
