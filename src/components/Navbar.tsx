"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom">
      <div className="container-fluid">
        {/* Brand */}
        <Link href="/" className="navbar-brand fw-bold">
          Fruit trade
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="#" className="nav-link active">กระดานรับซื้อ</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">การซื้อขาย</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">ติดต่อ</Link>
            </li>
          </ul>

          {/* Search + Avatar */}
          <form className="d-flex align-items-center gap-3">
            <input
              className="form-control rounded-pill"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <div
              className="rounded-circle bg-secondary"
              style={{ width: "32px", height: "32px" }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}