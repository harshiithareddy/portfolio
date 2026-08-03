import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Experience, Skills, Work } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Work · Harshitha Reddy",
  description:
    "Case studies, work experience, and the tools behind them: banking products at Wedbush Securities and Truist Bank, FinConnect, and PeriWise.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <Work />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
