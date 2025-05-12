//rafce => react arrow function component element
import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import MainLayout from '../layouts/main/MainLayout';
import AdminLayout from '../layouts/admin/AdminLayout';

// Main Routes
import HomePage from '../pages/main/home/HomePage';
import LoginPage from '../pages/main/auth/LoginPage';
import AuthLayout from '../layouts/auth/AuthLayout';

// Auth Routes
import MyBookingPage from '../pages/auth/MyBookingPage';

// Admin Routes
import DashBoardPage from '../pages/admin/dashboard/DashBoardPage';


const AppRoutes = () => {
    return (
        <Routes>
            {/* Main Routes */}
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            {/* Auth Protected Routes */}
            <Route path="/" element={<AuthLayout/>}>
                <Route path="my-bookings" element={<MyBookingPage />} />
            </Route>

            {/* Admin Protected Routes */}
            <Route path="admin/*" element={<AdminLayout />}>
                <Route path="dashboard" element={<DashBoardPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes
