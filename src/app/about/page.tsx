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
          <p className="mt-2 font-serif">I'm a young coder in London, who is interested in all things tech and design.</p>
          <p className="font-serif">I'm skilled in HTML, CSS, JavaScript and React, and am currently learning more about C++, Swift and Python.</p>
          <p className="font-serif">This site showcases some of my projects and provides information about me.</p>
          <p className="font-serif">Feel free to explore and check out my work!</p>
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
