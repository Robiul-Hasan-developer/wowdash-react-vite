import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Crm = () => {
    return (
        <div>
            <h1 className="mb-6">CRM dashboard Page</h1>
                <Button asChild>
                    <Link to="/">Go to AI Page</Link>
                </Button>
        </div>
    );
};

export default Crm;