import { Button } from "@/components/ui/button";
import Breadcrumb from "@/layouts/Breadcrumb";
import { Link } from "react-router-dom";

const AiDashboard = () => {
    return (
        <>
            <Breadcrumb title="AI" text="AI" />

            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
            <div className="">
                <h1 className="mb-6">Ai Dashboard Page</h1>
                <Button asChild>
                    <Link to="/crm">Go to CRM Page</Link>
                </Button>
            </div>
        </>
    );
};

export default AiDashboard;