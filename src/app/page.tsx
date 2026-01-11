import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center font-sans dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="min-h-screen w-screen max-w-6xl items-center grow py-32 px-16 bg-white dark:bg-black flex flex-col gap-6 text-center sm:items-start sm:text-left">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            JereNwa
          </h1>
          <p className="mt-2 font-serif">
            Welcome to my website! 
          </p>
          <p className="font-serif">Here I talk about my projects, and contributions.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
