// src/components/TodoForm.tsx
import React, { useState } from "react";
import { TodoFormProps, TagsType } from "./types"; 
import { TagSelector } from "./TagSelector";
import { createTaskAPI } from "./api";
import { errorMsg ,successMsg} from "./toastMsg";

export const TodoForm: React.FC<TodoFormProps> = ({ onClose , onSubmit}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<TagsType>({
    work: false,
    study: false,
    entertainment: false,
    family: false,
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      errorMsg(
        !title && !description
          ? "Both title and description are required!"
          : !title
          ? "Title is required!"
          : "Description is required!"
      );
      return;
    }

    const formData = {
      title,
      description,
      tags: Object.keys(tags).filter((tag) => tags[tag as keyof TagsType]),
    };

    try {
      await createTaskAPI(formData); 
      resetForm();
      onSubmit();
      successMsg("Task is added!");
    } catch (error) {
      errorMsg("Unable to make task!");
      throw error;
     
    }
  };

  // Handle tag selection change
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTags((prevTags) => ({
      ...prevTags,
      [name]: checked,
    }));
  };

  // Reset form fields
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTags({
      work: false,
      study: false,
      entertainment: false,
      family: false,
    });
    onClose();
  };

  return (
    <div className="absolute w-full h-screen flex text-gre justify-center items-center bg-opacity-50 bg-black left-0 top-0 transition-all duration-500 ease-in-out">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg w-full m-2 sm:m-0 bg-white overflow-hidden p-8 space-y-4 rounded-lg transition-all duration-500 ease-in-out transform"
      >
        <div className="flex flex-row w-full justify-between">
          <button
            type="button"
            className="font-semibold capitalize text-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-500 text-white p-1 px-4 rounded-md hover:bg-gray-600 focus:bg-gray-600 transition-all duration-300 ease-in-out"
          >
            Add
          </button>
        </div>
        <label
          className="font-semibold font-mono text-stone-600 text-xl"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="add a title"
          className="p-2 border rounded-md text-stone-600 font-mono transition-all duration-300 ease-in-out"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label
          className="font-semibold font-mono text-stone-600 text-xl"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          placeholder="add a description"
          className="p-2 border rounded-md text-stone-600 font-mono transition-all duration-300 ease-in-out"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label
          className="font-semibold font-mono text-stone-600 text-xl"
          htmlFor="tags"
        >
          Tags
        </label>
        <TagSelector tags={tags} onTagChange={handleTagChange} />
      </form>
    </div>
  );
};
