"use client";

export default function LandingPage() {
  return (
    <main className="relative flex m-3 sm:m-1 max-w-full w-full justify-center items-center h-svh overflow-hidden">
        <div className="flex justify-center items-center flex-col w-full h-svh sm:max-w-3xl overflow-hidden">
            <h2 className=" text-8xl font-extrabold bg-backgroundImage text-transparent [background-clip:text] [-webkit-text-fill-color:transparent">TODO</h2>
            <p className="text-center text-lg text-slate-500 py-7">             
A dynamic Next.js to-do app with features to add, edit, delete, mark tasks as complete/incomplete, organize by specific tags, and view tasks filtered by tags.
                </p>
            <a href="/todo" className="bg-black text-white py-2 px-3 rounded-md">Get Started</a>
        </div>
    </main>
  );
}
