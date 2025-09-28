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

        {/* Toggler */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* Collapse Menu */}
        <div className="d-flex w-100 align-items-center" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
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

          {/* Search + Avatar */}
          <form className="d-flex align-items-center gap-3 ml-4">
            <input
              className="form-control rounded-pill"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </form>
          <div  className="flex flex-col items-center justify-center ml-4 mr-4">
              <Link href="/profile" className="flex items-center justify-center cursor-pointer nav-link">
                <i className="bi bi-person-circle text-2xl"></i>
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}