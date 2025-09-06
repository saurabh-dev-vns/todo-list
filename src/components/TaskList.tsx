// /src/components/TaskList.tsx
import React from "react";
import { Task } from "./types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
    deleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    deleteTask,
    
}) => (
   
    <section className="w-full bg-slate-50 grid grid-cols-1 sm:grid-cols-2 sm:gap-3 p-1 overflow-y-auto h-full items-start">
        {tasks.length > 0 ? (
            tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    {...task}
                    onDelete={() => deleteTask(task._id)}
                />
            ))
        ) : (
            <span className="font-mono text-xl text-gray-500">No tasks found...</span>
        )}
    </section>
);
