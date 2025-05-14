import Accommodation from "../../../components/accommodation/Accommodation"
import Promotion from "../../../components/accommodation/Promotion"
import Activity from "../../../components/activity/Activity"
import Popular from "../../../components/accommodation/Popular"
import HeroImage from "../../../components/heroimage/HeroImage"


const HomePage = () => {
    return (
        <>
        <HeroImage />
        <div className="container">
          <Popular />
        </div>

            <div className="container">
                <Promotion />
            </div>
            <Activity />
            <div className="bg-secondary bg-opacity-10 py-4 my-5 rounded">
  <div className="container">
    <div className="row">
      {/* คอลัมน์ที่ 1 */}
      <div className="col-12 col-md-3 mb-3">
        <h6 className="fw-bold">เกี่ยวกับรีสอร์ท</h6>
        <ul className="list-unstyled mb-0">
          <li>หน้าแรก</li>
          <li>ข้อเสนอพิเศษ</li>
          <li>สิ่งอำนวยความสะดวก</li>
          <li>การรับประทานอาหาร</li>
          <li>แกลเลอรี่</li>
          <li>โลเคชั่น</li>
          <li>ติดต่อเรา</li>
        </ul>
      </div>

      {/* คอลัมน์ที่ 2 */}
      <div className="col-12 col-md-3 mb-3">
        <h6 className="fw-bold">ห้องพักและห้องชุด</h6>
        <ul className="list-unstyled mb-0">
          <li>ดีลักซ์ วิลลา</li>
          <li>พรีเมียร์ ดีลักซ์</li>
          <li>วิลลา ริมหาด</li>
          <li>พูล วิลลา</li>
          <li>วิลลา จูเนียร์สวีท</li>
        </ul>
      </div>

      {/* คอลัมน์ที่ 3 */}
      <div className="col-12 col-md-3 mb-3">
        <h6 className="fw-bold">จุดหมายปลายทางและกิจกรรม</h6>
        <ul className="list-unstyled mb-0">
          <li>เกี่ยวกับเกาะช้าง</li>
          <li>รีวิว</li>
        </ul>
      </div>

      {/* คอลัมน์ที่ 4 */}
      <div className="col-12 col-md-3 mb-3">
        <h6 className="fw-bold">กิจกรรม</h6>
        <ul className="list-unstyled mb-0">
          <li>งานแต่ง</li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default HomePage
