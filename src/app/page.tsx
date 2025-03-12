import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-screen bg-gruvbox-dark-bg0">
      <Navbar />
      <section className="flex h-screen flex-col items-center justify-center bg-gruvbox-dark-bg">
        <div className="flex flex-col items-start">
          <span className="p-1 text-2xl text-gruvbox-dark-fg2 font-bold">
            Hello, I'm
          </span>
          <h1 className="text-6xl text-gruvbox-dark-aqua font-bold">
            Mallar Bhattacharya
          </h1>
          <h2 className="self-center pt-2 font-mono text-xl text-gruvbox-dark-orange">
            {" "}
            Full Stack Developer
          </h2>
          <div className="self-center flex justify-around w-1/2">
            <button className="border-2 bg-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 translate-y-10 rounded-sm">Let's Connect</button>
            <button className="border-2 text-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 translate-y-10 rounded-sm">View My Work</button>
          </div>
        </div>
      </section>
    </main>
  );
}
