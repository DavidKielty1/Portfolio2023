import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DavidKielty Portfolio",
  description: "Let's work together.",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-visible">{children}</body>
    </html>
  );
}
