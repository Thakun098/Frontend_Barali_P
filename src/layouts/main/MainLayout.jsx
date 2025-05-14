import Navbar from "../common/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import Footer from "../../layouts/common/Footer";
// import HeroImage from "../../components/heroimage/HeroImage";



const MainLayout = () => {
  const { isUser, logout } = useAuth();
  return (
    <>
      <Navbar isUser={isUser} logout={logout} />
      
      
        <Outlet />
      
      <Footer />
    </>
  )
}

export default MainLayout
