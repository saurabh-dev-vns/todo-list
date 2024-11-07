// src/components/todoCard.tsx
"use client";
import React, { useState } from "react";
import { TodoForm } from "./todoForm";

type Task = {
    title: string;
    description: string;
    tags: string[];
};

export const TodoCard = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleFormSubmit = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <div className="bg-white h-full max-w-full container flex flex-col p-4">
            <div className="flex flex-row justify-between w-full p-1">
                <h3 className="font-black text-2xl text-gray-600">todo list</h3>
                <button
                    className="font-black text-2xl text-gray-600"
                    onClick={() => setIsFormOpen(true)}
                >
                    add
                </button>
            </div>

            <section className="flex flex-row w-full h-full mt-4 overflow-hidden">
                <section className="flex flex-col w-[20%] p-1 gap-y-2">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="h-5 w-5 bg-purple-400 rounded-full"></div>
                        <span className="font-bold text-lg text-gray-600 capitalize">work</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="h-5 w-5 bg-sky-400 rounded-full"></div>
                        <span className="font-bold text-lg text-gray-600 capitalize">study</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="h-5 w-5 bg-pink-400 rounded-full"></div>
                        <span className="font-bold text-lg text-gray-600 capitalize">entertainment</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="h-5 w-5 bg-green-400 rounded-full"></div>
                        <span className="font-bold text-lg text-gray-600 capitalize">family</span>
                    </div>
                </section>
                <section className="w-full h-full grid grid-cols-2 gap-3 p-1 overflow-y-auto items-start">
                {tasks.map((task, index) => (
                    <TaskCard key={index} title={task.title} description={task.description} tags={task.tags} />
                ))}
            </section>

            {isFormOpen && (
                <TodoForm onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} />
            )}
            </section>

           
        </div>
    );
};

type TaskCardProps = {
    title: string;
    description: string;
    tags: string[];
};

const TaskCard: React.FC<TaskCardProps> = ({ title, description, tags }) => {
    return (
        <div className="bg-amber-100 p-4 rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
                <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                <span className="text-gray-800 font-semibold cursor-pointer">option</span>
            </div>
            <p className="text-gray-500 text-sm">{description}</p>
            <div className="flex flex-row justify-between text-sm text-gray-600">
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-300 px-2 rounded">{tag}</span>
                    ))}
                </div>
                <span className="cursor-pointer text-blue-500">done</span>
            </div>
        </div>
    );
};
