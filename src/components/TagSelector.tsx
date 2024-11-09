// src/components/TagSelector.tsx
import React from "react";
import { TagsType } from "./types";

interface TagSelectorProps {
  tags: TagsType;
  onTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  tags,
  onTagChange,
}) => {
  return (
    <div className="flex flex-row gap-x-2">
      {["work", "study", "entertainment", "family"].map((tag) => (
        <label
          key={tag}
          htmlFor={tag}
          className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out text-xs font-medium sm:text-base ${
            tags[tag as keyof TagsType] ? "bg-blue-200" : "bg-gray-100"
          }`}
        >
          <input
            type="checkbox"
            className="sr-only"
            name={tag}
            id={tag}
            checked={tags[tag as keyof TagsType]}
            onChange={onTagChange}
          />
          <span
            className={`w-5 h-5 rounded-full ${
              tag === "work"
                ? "bg-purple-400"
                : tag === "study"
                ? "bg-sky-400"
                : tag === "entertainment"
                ? "bg-pink-400"
                : "bg-green-400"
            }`}
          ></span>
          <span>{tag}</span>
        </label>
      ))}
    </div>
  );
};
