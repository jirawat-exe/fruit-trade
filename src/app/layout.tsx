"use client";

import { useEffect } from "react";
import { Kanit, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
});
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-latin",
});

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
      <body className={`${kanit.variable} ${roboto.variable}`}>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
