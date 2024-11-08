"use client"; // Indicates that this file is part of the client-side rendering (React component)

import React, { useState } from "react";
import { TodoForm } from "./todoForm";

// Defining the Task type for structure of a task object
type Task = {
    title: string;
    description: string;
    tags: string[];
    done: boolean; // New 'done' property to track task completion
};

// Mapping tag names to their corresponding color classes
const TAG_COLORS: { [key: string]: string } = {
    work: "bg-purple-400",
    study: "bg-sky-400",
    entertainment: "bg-pink-400",
    family: "bg-green-400",
};

export const TodoCard = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

    // Function to handle new task submission or editing
    const handleFormSubmit = (task: Omit<Task, 'done'>) => {
        if (editingTaskIndex !== null) {
            setTasks((prevTasks) =>
                prevTasks.map((t, i) =>
                    i === editingTaskIndex ? { ...task, done: t.done } : t
                )
            );
            setEditingTaskIndex(null); // Reset editing index
        } else {
            setTasks((prevTasks) => [...prevTasks, { ...task, done: false }]);
        }
        setIsFormOpen(false); // Close the form after submission
    };

    // Toggle the "done" state for a specific task
    const toggleTaskDone = (index: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, done: !task.done } : task
            )
        );
    };

    // Delete a specific task
    const deleteTask = (index: number) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    // Open the edit form with the selected task's data
    const editTask = (index: number) => {
        setEditingTaskIndex(index);
        setIsFormOpen(true);
    };

    // Filter tasks based on the selected tag, if any
    const filteredTasks = selectedTag
        ? tasks.filter((task) => task.tags.includes(selectedTag))
        : tasks;

    return (
        <div className="bg-white h-full max-w-full container flex flex-col p-2 sm:p-4 transition-all duration-500 ease-in-out">
            <div className="flex flex-row justify-between w-full p-1">
                <h3 className="font-black text-2xl text-gray-600">todo list</h3>
                <button
                    className="font-black text-2xl text-gray-600"
                    onClick={() => { setIsFormOpen(true); setEditingTaskIndex(null); }}
                >
                    add
                </button>
            </div>

            <section className="flex flex-col lg:flex-row w-full h-full mt-4 overflow-hidden">
                <section className="flex flex-row w-full lg:flex-col lg:w-[20%] p-1 gap-y-2 overflow-hidden">
                    {Object.entries(TAG_COLORS).map(([tag, colorClass]) => (
                        <div
                            key={tag}
                            className={`flex flex-row p-[5px] m-[2px] sm:m-0 sm:p-2 rounded-lg gap-2 items-center cursor-pointer transition-all duration-300 ease-in-out ${
                                selectedTag === tag ? "bg-gray-100" : "bg-gray-50"
                            } hover:bg-gray-200`}
                            onClick={() =>
                                setSelectedTag(selectedTag === tag ? null : tag)
                            }
                        >
                            <div className={`h-5 w-5 rounded-full ${colorClass}`}></div>
                            <span className="sm:font-bold font-medium sm:text-lg text-gray-600 capitalize">
                                {tag}
                            </span>
                        </div>
                    ))}
                </section>

                <section className="w-full h-full flex flex-col sm:grid sm:grid-cols-2 gap-3 p-1 overflow-y-auto items-start">
                    {filteredTasks && filteredTasks.length > 0 ? (
                        filteredTasks.map((task, index) => (
                            <TaskCard
                                key={index}
                                title={task.title}
                                description={task.description}
                                tags={task.tags}
                                done={task.done}
                                onToggleDone={() => toggleTaskDone(index)}
                                onDelete={() => deleteTask(index)}
                                onEdit={() => editTask(index)}
                            />
                        ))
                    ) : (
                        <span className="font-mono font-medium text-xl sm:font-semibold text-gray-500 sm:text-2xl">
                            No list found....
                        </span>
                    )}
                </section>

                {isFormOpen && (
                    <TodoForm
                        onClose={() => setIsFormOpen(false)}
                        onSubmit={handleFormSubmit}
                        initialData={editingTaskIndex !== null ? tasks[editingTaskIndex] : undefined}
                    />
                )}
            </section>
        </div>
    );
};

// TaskCard component receives task details as props
type TaskCardProps = {
    title: string;
    description: string;
    tags: string[];
    done: boolean;
    onToggleDone: () => void;
    onDelete: () => void;
    onEdit: () => void;
};

// TaskCard component displays the details of a single task
const TaskCard: React.FC<TaskCardProps> = ({ title, description, tags, done, onToggleDone, onDelete, onEdit }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    return (
        <div className="bg-slate-100 w-full p-4 rounded-lg shadow-md flex flex-col gap-3 relative">
            <div className="flex flex-row justify-between items-center">
                <h4 className={`font-semibold text-lg ${done ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {title}
                </h4>
                <span
                    className="text-gray-800 font-semibold cursor-pointer relative"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                >
                    option
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-8 w-24 bg-white shadow-md rounded-lg p-2">
                            <div
                                className="cursor-pointer text-gray-600 hover:bg-gray-100 p-1 rounded"
                                onClick={() => { onEdit(); setDropdownOpen(false); }}
                            >
                                Edit
                            </div>
                            <div
                                className="cursor-pointer text-red-600 hover:bg-red-100 p-1 rounded"
                                onClick={() => { onDelete(); setDropdownOpen(false); }}
                            >
                                Delete
                            </div>
                        </div>
                    )}
                </span>
            </div>
            <p className={`text-sm ${done ? "line-through text-gray-400" : "text-gray-500"}`}>
                {description}
            </p>
            <div className="flex flex-row justify-between text-sm text-gray-600">
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`h-5 w-5 rounded-full ${TAG_COLORS[tag] || "bg-gray-300"}`}
                            title={tag}
                        ></span>
                    ))}
                </div>
                <span
                    className="cursor-pointer text-blue-500"
                    onClick={onToggleDone}
                >
                    {done ? "undone" : "done"}
                </span>
            </div>
        </div>
    );
};
