"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
      <h1 className="display-1 fw-bold text-danger mb-4">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4 text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-dark">
        Go Back Home
      </Link>
    </div>
  );
}