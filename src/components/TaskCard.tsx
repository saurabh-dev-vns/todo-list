// /src/components/TaskCard.tsx
import React, { useState } from "react";
import { TaskCardProps, TAG_COLORS } from "./types";

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  tags,
  done,
  onToggleDone,
  onDelete,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  return (
  //  <div className="bg-slate-100 w-full h-auto  p-4 rounded-lg shadow-md flex flex-col gap-3 relative">
  <div className="bg-slate-100 w-full p-4 rounded-lg shadow-md flex flex-col gap-3 relative">
   <div className="flex flex-row justify-between items-center">
        <h4
          className={`font-semibold text-lg ${
            done ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
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
                onClick={() => {
                  setDropdownOpen(false);
                }}
              >
                Edit
              </div>
              <div
                className="cursor-pointer text-red-600 hover:bg-red-100 p-1 rounded"
                onClick={() => {
                  onDelete();
                  setDropdownOpen(false);
                }}
              >
                Delete
              </div>
            </div>
          )}
        </span>
      </div>
      <p
        className={`text-sm ${
          done ? "line-through text-gray-400" : "text-gray-500"
        }`}
      >
        {description}
      </p>
      <div className="flex flex-row justify-between text-sm text-gray-600">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`h-5 w-5 rounded-full ${
                TAG_COLORS[tag] || "bg-gray-300"
              }`}
              title={tag}
            ></span>
          ))}
        </div>
        <span className="cursor-pointer text-blue-500" onClick={onToggleDone}>
          {done ? "undone" : "done"}
        </span>
      </div>
    </div>
  );
};