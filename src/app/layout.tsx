"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // dynamically load bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="th">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}