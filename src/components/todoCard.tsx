//src\components\todoCard.tsx

"use client";
import React, { useState } from "react"
import { TodoForm } from "./todoForm";



export const TodoCard = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);


    return (
        <div className="bg-white h-full max-w-full container flex flex-col p-4">
            <div className="flex flex-row justify-between w-full p-1">
                <h3 className="font-black text-2xl text-gray-600">todo list</h3>
                <button className="font-black text-2xl text-gray-600"
                    onClick={() => setIsFormOpen(true)}
                >
                    add
                </button>
            </div>

            <section className="flex flex-row w-full h-full mt-4 overflow-hidden">
                {/* Sidebar Section */}
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

                {/* Task Cards Section */}
                <section className="w-[80%] h-full grid grid-cols-2 gap-3 p-1 overflow-y-auto items-start">
                    <TaskCard title="Finish project" description="Complete the project by the end of the day" />
                    <TaskCard title="Study React" description="Read documentation and practice examples" />
                    <TaskCard title="Watch Movie" description="Relax and watch a movie with friends" />
                    <TaskCard title="Family Dinner" description="Prepare dinner for family gathering" />
                    <TaskCard title="Extended Task" description="This card has a much longer description to test dynamic height adjustment for cards within the grid layout. This content will make the card taller." />
                    <TaskCard title="Extended Task" description="This card has a much longer description to test dynamic height adjustment for cards within the grid layout. This content will make the card taller." />
                    <TaskCard title="Another Task" description="This is another example task with minimal content." />
                    <TaskCard title="Extended Task" description="This card has a much longer description to test dynamic height adjustment for cards within the grid layout. This content will make the card taller." />
                    <TaskCard title="Another Task" description="This is another example task with minimal content." />
                    <TaskCard title="Extended Task" description="This card has a much longer description to test dynamic height adjustment for cards within the grid layout. This content will make the card taller." />
                    <TaskCard title="Another Task" description="This is another example task with minimal content." />
                    <TaskCard title="Extended Task" description="This card has a much longer description to test dynamic height adjustment for cards within the grid layout. This content will make the card taller." />
                    {/* Add more TaskCards as needed */}
                </section>
            </section>
            {
                isFormOpen ? <TodoForm onClose={() => setIsFormOpen(false)} /> : ''
            }

        </div>

    )
}

const TaskCard = ({ title, description }) => {
    return (
        <div className="bg-amber-200 p-4 rounded-lg shadow-md flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
                <h4 className="font-semibold text-lg text-gray-700">{title}</h4>
                <span className="text-gray-500 cursor-pointer">option</span>
            </div>
            <p className="text-gray-500 text-sm">{description}</p>
            <div className="flex flex-row justify-between text-sm text-gray-600">
                <div className="flex gap-2">
                    <span>tag1</span>
                    <span>tag2</span>
                </div>
                <span className="cursor-pointer text-blue-500">done</span>
            </div>
        </div>
    )
}
