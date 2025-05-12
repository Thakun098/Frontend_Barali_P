import AuthService from "../services/auth/auth.service"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const currentUser = AuthService.getCurrentUser();

    const [isUser, setIsUser] = useState(currentUser || null);
    const [isMember, setIsMember] = useState(currentUser ? currentUser.roles.includes("ROLE_MEMBER") : false);
    const [isAdmin, setIsAdmin] = useState(currentUser ? currentUser.roles.includes("ROLE_ADMIN") : false);
    const [isModerator, setIsModerator] = useState(currentUser ? currentUser.roles.includes("ROLE_MODERATOR") : false);

    const navigate = useNavigate();

    const logout = () => {
        AuthService.logout();
        setIsUser(null);
        setIsMember(false);
        setIsAdmin(false);
        setIsModerator(false);

        navigate("/");
    };

    return { isUser, isMember, isAdmin, isModerator, logout }
}

// export default useAuth
