// src/components/todoCard.tsx
import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Task } from "./types";
import { fetchTasksAPI, deleteTaskAPI } from "./api";
import { TagFilter } from "./TagFilter";
import { TaskList } from "./TaskList";
import { successMsg } from "./toastMsg";
import Link from "next/link";

export const TodoCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const fetchTasks = async () => {
    const fetchedTasks = await fetchTasksAPI();
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id: string) => {
    await deleteTaskAPI(id);
    successMsg("Task deleted");
    fetchTasks();
  };

  const filteredTasks = selectedTag
    ? tasks.filter((task) => task.tags.includes(selectedTag))
    : tasks;

  return (
    <div className="bg-white h-full relative max-w-full container flex flex-col p-2">
      <header className="flex justify-between w-full px-2 py-1 bg-slate-200 rounded-lg">
        <Link href="/" className=" text-2xl font-extrabold bg-backgroundImage text-transparent [background-clip:text] [-webkit-text-fill-color:transparent">Todo List</Link>
        <button
          onClick={() => {
            setIsFormOpen(true);
          }}
          className="font-black text-2xl text-gray-600"
        >
          Add
        </button>
      </header>
      <section className="flex flex-col lg:flex-row w-full mt-4 overflow-hidden h-full">
        <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
        />
        {isFormOpen && (
          <TodoForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={fetchTasks}
          />
        )}
      </section>
    </div>
  );
};