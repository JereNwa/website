// Import global styles and fonts
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className="">
      <body>
        <h1
          className={`text-center font-bold text-5xl mt-6 ${geistSans.variable}`}
        >
          404 - Page Not Found
        </h1>
        <p className={`text-center mt-6 ${geistSans.variable}`}>
          This page does not exist.
          <br />
          <a href="/" className="text-center mt-6 text hover:underline">
            Go back home
          </a>
        </p>
      </body>
    </html>
  );
}
