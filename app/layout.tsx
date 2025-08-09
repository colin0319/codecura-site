import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeCura",
  description: "Biological Pioneers - Innovating biology with AI",
  // icons 설정 불필요 (app/icon.png 자동 사용)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
