import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DavidKielty Portfolio",
  description: "Lets work together.",
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
