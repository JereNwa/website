import Footer from "@/src/components/Footer";
import Navbar from "../../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="h-screen items-center justify-center font-sans dark:bg-black">
      <Navbar />
      <main className="min-h-screen w-screen max-w-3xl items-center  py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About
          </h1>
          <p className="mt-2">I'm a young coder in London and .</p>
          <code className="font-mono">
            <p>while (not finished) &#123;</p>
            <p>&nbsp; keepCoding();</p>
            &#125;
          </code>
        </div>
      </main>
      <Footer />
    </div>
  );
}
