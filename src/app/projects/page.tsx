import Footer from "@/src/components/Footer";
import Navbar from "../../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="h-screen items-center justify-center font-sans dark:bg-black">
      <Navbar />
      <main className="min-h-screen w-screen max-w-3xl items-center  py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Projects
          </h1>

          <p>Here are a list of my projects that are hosted on GitHub Pages.</p>

          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/learn-to-code-in-html">
              learn-to-code-in-html
            </a>{" "}
            [DEPRECATED]
          </h2>
          <p className="font-serif">
            A beginner-friendly resource to learn HTML from scratch. This
            project provides tutorials, examples, and exercises to help you get
            started with web development.
          </p>
          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/thanks-scratch">
              thanks-scratch
            </a>
          </h2>
          <p className="font-serif">
            A page dedicated to the Scratch programming community. This project
            talks about my experience with Scratch.
          </p>
          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/smb-deluxe">smb-deluxe</a>
          </h2>
          <p className="font-serif">
            A videogame I made a few years ago, ported to the web from Scratch.
          </p>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Test Projects
          </h1>
          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/test1">test1</a>
          </h2>
          <p className="font-serif">
            A simple test project to experiment with HTML and CSS.
          </p>
          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/scribe-renderer-test">
              scribe-renderer-test
            </a>
          </h2>
          <p className="font-serif">
            A test project for the Scribe Renderer, showcasing its capabilities
            and features.
          </p>
          <h2 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <a href="https://jerenwa.github.io/digital-dice">digital-dice</a>
          </h2>
          <p className="font-serif">
            My school project for creating a digital dice using micro:bits.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
