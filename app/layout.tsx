import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeCura",
  description: "Biological Pioneers - Innovating biology with AI",
  icons: {
    icon: "/favicon.png", // 또는 /favicon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

