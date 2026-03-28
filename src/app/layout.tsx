import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: "%s | JereNwa",
    default: "Home | JereNwa",
  },
  description: "JereNwa's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
