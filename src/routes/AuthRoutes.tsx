import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <Outlet />
    );
};

export default AuthRoutes;