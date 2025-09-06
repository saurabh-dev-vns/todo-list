// /src/components/TagFilter.tsx
import React from "react";
import { TAG_COLORS } from "./types";

interface TagFilterProps {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  selectedTag,
  setSelectedTag,
}) => {
  return (
    <section className="flex my-1 lg:my-0 lg:mr-1 flex-row lg:flex-col w-full justify-around lg:justify-normal lg:w-[20%] p-1 gap-y-2 bg-slate-50">
      {Object.entries(TAG_COLORS).map(([tag, colorClass]) => (
        <div
          key={tag}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            selectedTag === tag ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
        >
          <div className={`h-5 w-5 rounded-full ${colorClass}`} />
          <span className="ml-2 text-sm sm:text-lg text-gray-600 capitalize">{tag}</span>
        </div>
      ))}
    </section>
  );
};
