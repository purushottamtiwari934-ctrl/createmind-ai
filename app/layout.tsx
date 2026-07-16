import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreateMind AI",
  description: "Ideas Into Intelligent Creativity.",
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
