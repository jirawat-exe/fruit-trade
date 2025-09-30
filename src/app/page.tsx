"use client";

import Link from "next/link";

const products = Array(12).fill({
  id: 1,
  name: "ลำไยไหเงิน",
  price: 200,
  detail: "รับ 1000 / 6000 ก.ก.",
  location: "จัดส่ง จ.ไม่ยากไม่ทำ",
});

export default function Home() {
  return (
    <div className="container my-5">
      {/* Title */}
      <h2 className="text-center mb-4 fw-bold">กระดานรับซื้อ</h2>

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((p, i) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}>
            <Link
              href={`/product/${p.id}`}
              className="text-decoration-none text-dark"
            >
            <div className="card h-100 shadow-sm position-relative">
              {/* Price Tag */}
              <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                ฿{p.price}
              </span>

              <div className="d-flex align-items-center justify-content-center bg-light rounded-top" style={{height: "120px"}}>
                <img
                  src="/tshirt_main.png"
                  alt="T-shirt"
                  className="img-fluid h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{p.name}</h5>
                <p className="card-text text-muted mb-1">{p.detail}</p>
                <p className="card-text text-success fw-semibold">{p.location}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}