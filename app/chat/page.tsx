import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LetsChat } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Let's chat · Harshitha Reddy",
  description:
    "Reach Harshitha Reddy: email, LinkedIn, or grab time on the calendar.",
};

export default function ChatPage() {
  return (
    <>
      <Nav />
      <main>
        <LetsChat />
      </main>
      <Footer />
    </>
  );
}
