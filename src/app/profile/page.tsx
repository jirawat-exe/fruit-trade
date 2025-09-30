import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        {/* โปรไฟล์ฝั่งซ้าย */}
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <Image
                src="/face.png"
                alt="Profile"
                width={150}
                height={150}
                className="rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <h5>John Doe</h5>
              <p>Tel Number : <br /> Order Count :</p>
              <p>
                <strong>ที่อยู่</strong><br />
                491 Rangsit-Nakhon Nayok 4 Road, Prachatiphat Amphoe Tanyaburi,
                Pathumthani 12130 THAILAND
              </p>
            </div>
          </div>
        </div>

        {/* ผลผลิตประมาณการณ์ฝั่งขวา */}
        <div className="col-md-4">
          <h3><strong>ผลผลิตประมาณการณ์</strong></h3>
            <div className="card p-3 mb-2">
              <h6><strong>Mango</strong></h6>
              <div className="py-2 d-flex justify-content-between">
                <small>ขนาดพื้นที่ 1 ไร่</small>
                <small> ผลผลิต 500 ก.ก.</small>
              </div>
            </div>
            <div className="card p-3 mb-2">
              <h6><strong>Lemongrass</strong></h6>
              <div className="py-2 d-flex justify-content-between">
              <small>Estimate Yield</small>
              <small>Estimate Yield</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* ข้อมูลฟาร์ม */}
        <div className="col-md-4 mb-3">
            <h3><strong>ข้อมูลฟาร์ม/สวน</strong></h3>
              <div className="card p-3">
                <Image
                  src="/farm.jpg"
                  alt="Farm"
                  width={400}
                  height={120}
                  className="w-100 rounded"
                  style={{ objectFit: "cover", height: "120px" }}
                />
                <p className="mt-3 mb-1"><strong>หมายเลขแปลง</strong></p>
                <p>ที่อยู่แปลง<br />บ้านเลขที่<br />ตำบล<br />อำเภอ<br />จังหวัด</p>
              </div>
        </div>  
        {/* สิ่งที่ต้องทำ */}
        <div className="col-md-4 mb-3">
          <h3><strong>สิ่งที่ต้องทำ</strong></h3>
              <div className="card p-3 mb-2">
                  <div>
                    <p className="mb-1"><strong>ลำไยไหเงิน</strong></p>
                    <div className="py-2 d-flex justify-content-between">
                      <small>details</small>
                      <small className="text-muted">income date</small>
                    </div>
                  </div>
                </div>
                <div className="card p-3 mb-2">
                  <div>
                    <p className="mb-1"><strong>Input Name</strong></p>
                    <div className="py-2 d-flex justify-content-between">
                      <small>details</small>
                      <small className="text-muted">income date</small>
                    </div>
                </div>
            </div>
        </div>

        {/* ออเดอร์ที่เข้าร่วม */}
        <div className="col-md-4 mb-3">
            <h3><strong>ออเดอร์ที่เข้าร่วม</strong></h3>
            <div className="card p-3 mb-2">
                <div>
                  <p className="mb-1"><strong>ลำไยไหเงิน</strong></p>
                  <div className="py-2 d-flex justify-content-between">
                  <small>details</small>
                  <small className="text-muted">income date</small>
                  </div>
                </div>
              </div> 
            <div className="card p-3 mb-2">
                <div>
                <p className="mb-1"><strong>Input Name</strong></p>
                  <div className="py-2 d-flex justify-content-between">
                  <small>details</small>
                  <small className="text-muted">income date</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;