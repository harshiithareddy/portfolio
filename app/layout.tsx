import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshithareddy.com"),
  title: "Harshitha Reddy · Business Analyst",
  description:
    "I turn complex business needs into simple digital solutions. Business analyst and industrial engineer; banking products built from the ground up at Wedbush Securities and Truist Bank.",
  openGraph: {
    title: "Harshitha Reddy · Business Analyst",
    description:
      "I turn complex business needs into simple digital solutions. Banking products built from the ground up at Wedbush Securities and Truist Bank.",
    url: "https://harshithareddy.com",
    siteName: "hash.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} ${jbmono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
