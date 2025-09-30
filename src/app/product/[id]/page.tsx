"use client";


import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";

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
          <div className="d-flex flex-column gap-3">
            {/* รูปหลัก */}
            <Image
              src={mainImage}
              alt="Main T-shirt"
              width={500}
              height={500}
              className="img-fluid rounded border"
            />

            {/* Thumbnail list */}
            <div className="d-flex gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  role="button"
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`T-shirt ${i + 1}`}
                    width={100}
                    height={100}
                    className={`img-thumbnail ${
                      mainImage === img ? "border border-primary" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>

          {/* Right column: details */}
          <Col md={7}>
            <h3>ลำไย ไหทองคำ</h3>
            <h5 className="text-muted">฿260 / ก.ก.</h5>
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            {/* Progress bar */}
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>จำนวน</span>
                <span>2500 ก.ก. / 4000 ก.ก.</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "62.5%" }}
                  aria-valuenow={2500}
                  aria-valuemin={0}
                  aria-valuemax={4000}
                ></div>
              </div>
            </div>

            {/* Seller info */}
            <p>
              <strong>ผู้รับซื้อ: </strong>
              โรงงานน้ำไหทองของไหทอง (100 ออเดอร์)  
              <br />
              <small>
                วัดซ่อม อำเภอ กระจะก จังหวัด ไม่ยากไม่ทำ
              </small>
            </p>

            <div className="d-flex gap-2 mb-4">
              <Button variant="outline-dark">ติดตามผู้ซื้อ</Button>
              <Button variant="dark">เข้าร่วมการซื้อขาย</Button>
            </div>
          </Col>
        </Row>

        {/* Tabs */}
        <Tab.Container defaultActiveKey="details">
          <Nav variant="tabs" className="mt-5">
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