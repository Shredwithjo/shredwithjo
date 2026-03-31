import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shredwithjo.com"),
  title: "Shred With Jo | Online Fitness Coaching",
  description:
    "Shred With Jo offers online fitness coaching for fat loss, muscle gain, and body transformation with structured training and accountability.",
  keywords: [
    "online fitness coaching",
    "fitness coach",
    "online personal trainer",
    "fat loss coach",
    "muscle gain coaching",
    "Toronto fitness coach",
    "body recomposition coach",
  ],
  verification: {
    google: "v1HdReepSiv0MZ_EHeA4awV_lW-oQhZKj_WmXeEpZnA",
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