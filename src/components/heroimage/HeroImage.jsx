
import SearchBar from "../../layouts/common/SearchBar";

const HeroImage = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const heroImage = `${BASE_URL}/uploads/heroimages/`;
    const imageStyle = {
        width: "100%",
        height: "90vh",
        objectFit: "cover",
        objectPosition: "center",
    };
    return (
        <div>
            {/* Hero Carousel */}
            < div id="heroCarousel" className="carousel slide carousel-slide" data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${heroImage}/hero1.jpg`} className="d-block w-100" alt="Resort 1"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h2>พักผ่อนสุดหรูริมชายหาด</h2>
                            <p>สัมผัสธรรมชาติอย่างแท้จริงในรีสอร์ทระดับพรีเมียม</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero2.jpg`} className="d-block w-100" alt="Resort 2"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h2>ห้องพักหลากหลายสไตล์</h2>
                            <p>เลือกห้องที่เหมาะกับไลฟ์สไตล์ของคุณ</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero3.jpg`} className="d-block w-100" alt="Resort 3"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h2>ผ่อนคลายกับสปาระดับโลก</h2>
                            <p>ฟื้นฟูร่างกายและจิตใจในทุกช่วงเวลา</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero4.jpg`} className="d-block w-100" alt="Resort 4"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h2>สระว่ายน้ำวิวทะเล</h2>
                            <p>วิวหลักล้าน ที่คุณไม่ควรพลาด</p> */}
                        </div>
                    </div>
                    
                </div>

                {/* ✅ Overlay กล่อง + SearchBar */}
      <div
        style={{
          position: "absolute",
          bottom: "25%", // ขยับจากล่างขึ้นมาเล็กน้อย
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* กล่องข้อความ */}
        <div
          style={{
            width: "700px",
            height: "200px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-40px", // ✅ ดึงให้ SearchBar ทับกล่องนิดหน่อย
            zIndex: 2,
            opacity: 0.9,
          }}
        >
          <h1 className="text-center mb-0">
            ยินดีต้อนรับสู่ <br />
            บารารี บีช รีสอร์ท เกาะช้าง
          </h1>
        </div>

        {/* SearchBar */}
        <div
          style={{
            width: "80%",
            zIndex: 3,
            
            
          }}
        >
          <SearchBar />
        </div>
      </div>

                {/* ปุ่มควบคุม */}
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">ก่อนหน้า</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">ถัดไป</span>
                </button>
            
            </div >
        </div >

    )
}

export default HeroImage
