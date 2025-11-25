import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AiDashboard = () => {
    return (
        <div>
            <h1>Ai Dashboard Page</h1>
            <div className="flex min-h-svh flex-col items-center justify-center">
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
        </div>
    );
};

export default AiDashboard;