"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed-top navbar navbar-light bg-light border-bottom">
      <div className="container-fluid d-flex align-items-center">
        {/* Brand */}
        <Link href="/" className="navbar-brand fw-bold me-4">
          Fruit trade
        </Link>

        {/* เมนู + search + profile (เฉพาะ desktop) */}
        <div className="d-none d-md-flex flex-grow-1 align-items-center">
          {/* เมนูถัดจาก Brand */}
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                กระดานรับซื้อ
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/trade" className="nav-link">
                การซื้อขาย
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                ติดต่อ
              </Link>
            </li>
          </ul>

          {/* ดัน search + profile ไปด้านขวา */}
          <div className="d-flex align-items-center ms-auto gap-3">
            <form className="d-flex align-items-center">
              <input
                className="form-control rounded-pill"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
            </form>
            <Link
              href="/profile"
              className="flex items-center justify-center cursor-pointer nav-link"
            >
              <i className="bi bi-person-circle fs-2"></i>
            </Link>
          </div>
        </div>

        {/* Offcanvas (เฉพาะ mobile) */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end d-md-none"
          tabIndex={-1}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  กระดานรับซื้อ
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/trade" className="nav-link">
                  การซื้อขาย
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  ติดต่อ
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center gap-3 mt-3">
              <input
                className="form-control rounded-pill"
                type="search"
                placeholder="Search for products..."
              />
            </form>
            <div className="d-flex justify-content-center mt-3">
              <Link href="/profile" className="nav-link">
                <i className="bi bi-person-circle fs-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
