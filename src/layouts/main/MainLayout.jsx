import Navbar from "../common/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import Footer from "../../components/Footer"

const MainLayout = () => {
  const { isUser, logout } = useAuth();
  return (
    <>
      <Navbar isUser={isUser} logout={logout} />
      <>
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100"
          style={{
            backgroundImage: '',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>

          {/* กล่องข้อความยินดีต้อนรับ */}
          <div
            style={{
              width: '950px',
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem'
            }}
          >
            <h1 className="text-center mb-0">ยินดีต้อนรับสู่ บารารี บีช รีสอร์ท เกาะช้าง</h1>
          </div>

          <SearchBar isUser={isUser} />
        </div>
      </>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
