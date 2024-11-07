// src/components/todoCard.tsx
"use client"; // Indicates that this file is part of the client-side rendering (React component)

import React, { useState } from "react"; // Importing necessary React hooks for state management
import { TodoForm } from "./todoForm"; // Importing the TodoForm component used to add tasks

// Defining the Task type for structure of a task object
type Task = {
    title: string;
    description: string;
    tags: string[]; // Tags associated with each task
};

// Mapping tag names to their corresponding color classes
const TAG_COLORS: { [key: string]: string } = {
    work: "bg-purple-400", // work tasks will have purple background
    study: "bg-sky-400", // study tasks will have blue background
    entertainment: "bg-pink-400", // entertainment tasks will have pink background
    family: "bg-green-400", // family tasks will have green background
};

export const TodoCard = () => {
    // State hooks to manage form visibility, task list, and selected tag
    const [isFormOpen, setIsFormOpen] = useState(false); // State to control visibility of the add task form
    const [tasks, setTasks] = useState<Task[]>([]); // State to store the list of tasks
    const [selectedTag, setSelectedTag] = useState<string | null>(null); // State to track the selected tag for filtering tasks

    // Function to handle new task submission
    const handleFormSubmit = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]); // Add new task to the existing task list
    };

    // Filter tasks based on the selected tag, if any
    const filteredTasks = selectedTag
        ? tasks.filter((task) => task.tags.includes(selectedTag)) // Only show tasks with the selected tag
        : tasks; // Show all tasks if no tag is selected

    return (
        <div className="bg-white h-full max-w-full container flex flex-col p-2 sm:p-4 transition-all duration-500 ease-in-out">
            <div className="flex flex-row justify-between w-full p-1">
                {/* Header section with title and add button */}
                <h3 className="font-black text-2xl text-gray-600">todo list</h3>
                <button
                    className="font-black text-2xl text-gray-600"
                    onClick={() => setIsFormOpen(true)} // Open form when 'add' button is clicked
                >
                    add
                </button>
            </div>

            <section className="flex flex-col lg:flex-row w-full h-full mt-4 overflow-hidden">
                {/* Sidebar with tag filters */}
                <section className="flex flex-row w-full lg:flex-col lg:w-[20%] p-1 gap-y-2 overflow-hidden">
                    {Object.entries(TAG_COLORS).map(([tag, colorClass]) => (
                        <div
                            key={tag}
                            className={`flex flex-row p-[5px] m-[2px] sm:m-0 sm:p-2 rounded-lg gap-2 items-center cursor-pointer transition-all duration-300 ease-in-out ${
                                selectedTag === tag ? "bg-gray-100" : "bg-gray-50" // Highlight selected tag
                            } hover:bg-gray-200`} 
                            onClick={() =>
                                setSelectedTag(selectedTag === tag ? null : tag) // Toggle tag selection
                            }
                        >
                            <div className={`h-5 w-5 rounded-full ${colorClass}`}></div> {/* Circle showing tag color */}
                            <span className="sm:font-bold font-medium sm:text-lg text-gray-600 capitalize">
                                {tag} {/* Display tag name */}
                            </span>
                        </div>
                    ))}
                </section>

                {/* Task list section */}
                <section className="w-full h-full flex flex-col sm:grid sm:grid-cols-2 gap-3 p-1 overflow-y-auto items-start">
                    {/* Render filtered tasks or show a 'no tasks' message */}
                    {filteredTasks && filteredTasks.length > 0 ? (
                        filteredTasks.map((task, index) => (
                            <TaskCard
                                key={index} // Use index as key
                                title={task.title}
                                description={task.description}
                                tags={task.tags} // Pass task details as props to TaskCard
                            />
                        ))
                    ) : (
                        <span className="font-mono font-semibold text-gray-500 text-2xl">
                            No list found.... {/* Display this if no tasks are available */}
                        </span>
                    )}
                </section>

                {/* Show TodoForm when the form is open */}
                {isFormOpen && (
                    <TodoForm
                        onClose={() => setIsFormOpen(false)} // Close form
                        onSubmit={handleFormSubmit} // Pass the form submit handler to TodoForm
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
};

// TaskCard component displays the details of a single task
const TaskCard: React.FC<TaskCardProps> = ({ title, description, tags }) => {
    return (
        <div className="bg-slate-100 w-full p-4 rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
                {/* Title and options for the task */}
                <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                <span className="text-gray-800 font-semibold cursor-pointer">option</span> {/* Placeholder for options */}
            </div>
            <p className="text-gray-500 text-sm">{description}</p> {/* Task description */}
            <div className="flex flex-row justify-between text-sm text-gray-600">
                <div className="flex gap-2">
                    {/* Render tags associated with the task */}
                    {tags.map((tag, index) => (
                        <span
                            key={index} // Use index as key
                            className={`h-5 w-5 rounded-full ${TAG_COLORS[tag] || "bg-gray-300"}`} // Display tag color
                            title={tag} // Show tag name on hover
                        ></span>
                    ))}
                </div>
                <span className="cursor-pointer text-blue-500">done</span> {/* Placeholder for 'done' button */}
            </div>
        </div>
    );
};
