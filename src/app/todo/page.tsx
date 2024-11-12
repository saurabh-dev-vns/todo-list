"use client";
import { TodoCard } from "../../components/TodoCard";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative max-w-full w-full h-svh">
      <TodoCard />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
