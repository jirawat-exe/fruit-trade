import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <div className="container mt-4">
      {/* ข้อมูลผู้ใช้ */}
      <div className="row mb-4">
        <div className="col-md-3 text-center">
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
              margin: "auto",
            }}
          ></div>
        </div>
        <div className="col-md-9">
          <h5>John Doe</h5>
          <p>Tel Number : <br /> Order Count :</p>
          <p>
            <strong>ที่อยู่</strong><br />
            491 Rangsit-Nakhon Nayok 4 Road, Prachatiphat Amphoe Tanyaburi,
            Pathumthani 12130 THAILAND
          </p>
        </div>
      </div>

      {/* ผลผลิตประมาณการณ์ */}
      <div className="mb-4">
        <h6>ผลผลิตประมาณการณ์</h6>
        <div className="d-flex gap-3 flex-wrap">
          <div className="card p-3" style={{ minWidth: "200px" }}>
            <h6>Mango</h6>
            <p>ขนาดพื้นที่ 1 ไร่<br />ผลผลิต 500 ก.ก.</p>
          </div>
          <div className="card p-3" style={{ minWidth: "200px" }}>
            <h6>Lemongrass</h6>
            <p>Estimate Yield</p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* ข้อมูลฟาร์ม */}
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h6>ข้อมูลฟาร์ม/สวน</h6>
            <div
              style={{
                width: "100%",
                height: "120px",
                backgroundColor: "#e0e0e0",
                borderRadius: "10px",
              }}
            ></div>
            <p className="mt-3 mb-1"><strong>หมายเลขแปลง</strong></p>
            <p>ที่อยู่แปลง<br />บ้านเลขที่<br />ตำบล<br />อำเภอ<br />จังหวัด</p>
          </div>
        </div>

        {/* สิ่งที่ต้องทำ */}
        <div className="col-md-4 mb-3">
          <div className="card p-3 bg-light">
            <h6>สิ่งที่ต้องทำ</h6>
            <div className="border-bottom py-2">
              <p className="mb-1"><strong>ลำไยให้น้ำ</strong></p>
              <small>details - income date</small>
            </div>
            <div className="py-2">
              <p className="mb-1"><strong>Input Name</strong></p>
              <small>details - income date</small>
            </div>
          </div>
        </div>

        {/* ออเดอร์ที่เข้าร่วม */}
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h6>ออเดอร์ที่เข้าร่วม</h6>
            <div className="border-bottom py-2">
              <p className="mb-1"><strong>ลำไยให้น้ำ</strong></p>
              <small>details - income date</small>
            </div>
            <div className="py-2">
              <p className="mb-1"><strong>Input Name</strong></p>
              <small>details - income date</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;