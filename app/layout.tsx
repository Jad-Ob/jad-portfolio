import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jad Obeid — Software Developer",
  description:
    "Full-stack developer portfolio: web apps, AI tools, and database projects.",
  openGraph: {
    title: "Jad Obeid — Software Developer",
    description:
      "Full-stack developer portfolio: web apps, AI tools, and database projects.",
    type: "website",
  },
  metadataBase: new URL("https://jad-portfolio-three.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
