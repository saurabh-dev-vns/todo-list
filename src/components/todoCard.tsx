// src/components/todoCard.tsx
import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Task } from "./types";
import { fetchTasksAPI, deleteTaskAPI } from "./api";
import { TagFilter } from "./TagFilter";
import { TaskList } from "./TaskList";

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

  const handleFormSubmit = async (
    task: Omit<Task, "done"|"_id">
  ) => {
    setTasks([
      ...tasks,
      { ...task, done: false, _id: (tasks.length + 1).toString() },
    ]);
    setIsFormOpen(false);
    fetchTasks();
  };

  const toggleTaskDone = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = async (id: string) => {
    await deleteTaskAPI(id);
    fetchTasks();
  };

  const filteredTasks = selectedTag
    ? tasks.filter((task) => task.tags.includes(selectedTag))
    : tasks;

  return (
    <div className="bg-white h-full max-w-full container flex flex-col p-2 sm:p-4">
      <header className="flex justify-between w-full p-1">
        <h3 className="font-black text-2xl text-gray-600">Todo List</h3>
        <button
          onClick={() => {
            setIsFormOpen(true);
          }}
          className="font-black text-2xl text-gray-600"
        >
          Add
        </button>
      </header>
      <section className="flex flex-col lg:flex-row w-full h-full mt-4 overflow-hidden">
        <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <TaskList
          tasks={filteredTasks}
          toggleTaskDone={toggleTaskDone}
          deleteTask={deleteTask}
        />
        {isFormOpen && (
          <TodoForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </section>
    </div>
  );
};
