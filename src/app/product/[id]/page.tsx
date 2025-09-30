"use client";

import { Kanit } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";

const kanit = Kanit({
  weight: ["400", "700"], // 400 = ปกติ, 700 = หนา
  subsets: ["thai"],      // สำหรับภาษาไทย
});

export default function ProductPage() {
  const images = [
    "/tshirt_main.png",
    "/tshirt_1.png",
    "/tshirt_2.png",
    "/tshirt_3.png",
  ];

  // รูปแรกเป็นค่าเริ่มต้น
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <>
      <Container className="mt-5">
        <Row>
          {/* Left column: images */}
        <Col md={5}>
          <div className="d-flex flex-row gap-3">
            {/* Thumbnails ด้านซ้าย */}
            <div className="d-flex flex-column gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  role="button"
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`T-shirt ${i + 1}`}
                    width={80}
                    height={80}
                    className={`img-thumbnail ${
                      mainImage === img ? "border border-primary" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* รูปหลัก ด้านขวา */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
              <Image
                src={mainImage}
                alt="Main T-shirt"
                width={400}
                height={400}
                className="img-fluid rounded border"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Col>

          {/* Right column: details */}
          <Col md={7}>
            <div className="mt-2 mb-3">
            <h3 className={kanit.className}><strong>ลำไย ไหทองคำ</strong></h3>
            </div>
            <div className="mb-6">
            <h5><strong>฿260 / ก.ก.</strong></h5>
            </div>
            <div className="mt-4 mb-3 border-bottom pb-2">
            <p className="text-muted">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            </div>

            {/* Progress bar */}
            <div className="mb-3 border-bottom pb-3">
              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#404040ff", fontWeight: "bold", fontSize: "1rem" }}>รับจำนวน</span>
                <span>2500 ก.ก. / 4000 ก.ก.</span>
              </div>
              <div className="progress mb-2 rounded-pill" style={{ height: "30px" }}>
                <div
                  className="progress-bar bg-dark rounded-pill"
                  role="progressbar"
                  style={{ width: "62.5%" }}
                  aria-valuenow={2500}
                  aria-valuemin={0}
                  aria-valuemax={4000}
                ></div>
              </div>
            </div>

            {/* Seller info */}
            <div className="mb-4 border-bottom pb-1">
              <span style={{ color: "#404040ff", fontWeight: "bold", fontSize: "1rem" }}>ผู้รับซื้อ</span>
              <div className="mt-3 text-muted">
                <p style={{ color: "#404040ff"}}>โรงงานลำไย (100 ออเดอร์)</p>
              </div>
              <div>
              <p style={{ color: "#525252ff", textIndent: "2rem" }}>
                <small>
                จัดส่งที่ จังหวัด อำเภอ
                </small>
              </p>
              </div>
            </div>

            <div className="d-flex gap-2 mb-4" style={{ width: "100%" }}>
              <Button 
              // variant="secondary"
              className="w-100 rounded-pill"
              style={{ backgroundColor: "#e5e5e5ff", color: "black", flex: "0 0 30%", height: "60px", border: "none"}}>
                ติดตามผู้ซื้อ
              </Button>
              <Button
              variant="dark"
              className="w-100 rounded-pill"
              style={{ flex: "0 0 70%", height: "60px", border: "none" }}>
                เข้าร่วมการซื้อขาย
              </Button>
            </div>
          </Col>
        </Row>

        {/* Tabs */}
        <Tab.Container defaultActiveKey="details">
          <Nav variant="tabs" className="mt-5 nav-fill">
            <Nav.Item>
              <Nav.Link eventKey="details">Product Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviews">Rating & Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="faqs">FAQs</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="details">
              <h6>รายละเอียดการซื้อขาย</h6>
              <Row className="text-center mb-4">
                <Col>
                  <div className="border rounded p-3">ผู้เข้าร่วมการซื้อขาย</div>
                </Col>
                <Col>
                  <div className="border rounded p-3">ปริมาณสินค้า</div>
                </Col>
                <Col>
                  <div className="border rounded p-3">ยืนยันการส่งภายในวันที่</div>
                </Col>
                <Col>
                  <div className="border rounded p-3">จัดส่งที่</div>
                </Col>
              </Row>

              <h6>ตัวอย่างรูปสินค้าที่ถูกปฏิเสธ</h6>
              <div className="d-flex gap-3">
                <div className="border rounded p-4 text-muted">Image</div>
                <div className="border rounded p-4 text-muted">Image</div>
                <div className="border rounded p-4 text-muted">Image</div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              <p>ยังไม่มีรีวิวสินค้า</p>
            </Tab.Pane>
            <Tab.Pane eventKey="faqs">
              <p>คำถามที่พบบ่อย</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  );
}