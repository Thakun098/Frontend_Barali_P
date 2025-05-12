import Navbar from "./NavBar";
import ProtectedRoute from "../../middleware/ProtectedRoute";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminLayout = () => {
    const { isUser, logout } = useAuth();

    return (
        <ProtectedRoute roles={["ROLE_ADMIN", "ROLE_MODERATOR"]}>
            <Navbar isUser={isUser} logout={logout} />

            <main className="container">
                <Outlet />
            </main>
        </ProtectedRoute>
    )
}

export default AdminLayout
