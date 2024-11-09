// /src/components/TaskList.tsx
import React from "react";
import { Task } from "./types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
    toggleTaskDone: (id: string) => void;
    deleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    toggleTaskDone,
    deleteTask,
}) => (
    <section className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-3 p-1 overflow-y-auto h-full">
        {tasks.length > 0 ? (
            tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    {...task}
                    onToggleDone={() => toggleTaskDone(task._id)}
                    onDelete={() => deleteTask(task._id)}
                />
            ))
        ) : (
            <span className="font-mono text-xl text-gray-500">No tasks found...</span>
        )}
    </section>
);
