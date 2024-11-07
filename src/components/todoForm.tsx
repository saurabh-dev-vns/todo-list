// src/components/todoForm.tsx
import React, { useState } from 'react';

type TodoFormProps = {
  onClose: () => void;
  onSubmit: (task: { title: string; description: string; tags: string[] }) => void;
};

type TagsType = {
  work: boolean;
  study: boolean;
  entertainment: boolean;
  family: boolean;
};

export const TodoForm: React.FC<TodoFormProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<TagsType>({
    work: false,
    study: false,
    entertainment: false,
    family: false,
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Title and Description are required.');
      return;
    }

    const formData = {
      title,
      description,
      tags: Object.keys(tags).filter((tag) => tags[tag as keyof TagsType]),
    };
    onSubmit(formData);  // Pass the data back to TodoCard

    setTitle('');
    setDescription('');
    setTags({ work: false, study: false, entertainment: false, family: false });
    setError('');
    onClose();
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTags((prevTags) => ({
      ...prevTags,
      [name]: checked,
    }));
  };

  return (
    <div className="absolute w-full h-screen flex justify-center items-center bg-opacity-50 bg-black left-0 top-0 transition-all duration-500 ease-in-out">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-lg w-full m-2 sm:m-0 bg-white overflow-hidden p-8 space-y-4 rounded-lg transition-all duration-500 ease-in-out transform">
        <div className="flex flex-row w-full justify-between">
          <button type="button" className="font-semibold capitalize text-gray-500" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="bg-gray-500 text-white p-1 px-4 rounded-md hover:bg-gray-600 focus:bg-gray-600 transition-all duration-300 ease-in-out">
            Add
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <label className="font-semibold font-mono text-stone-600 text-xl" htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="add a title"
          className="p-2 border rounded-md text-stone-600 font-mono transition-all duration-300 ease-in-out"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="font-semibold font-mono text-stone-600 text-xl" htmlFor="description">Description</label>
        <textarea
          placeholder="add a description"
          className="p-2 border rounded-md text-stone-600 font-mono transition-all duration-300 ease-in-out"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="font-semibold font-mono text-stone-600 text-xl" htmlFor="tags">Tags</label>
        <div className="flex flex-row gap-x-2">
          {['work', 'study', 'entertainment', 'family'].map((tag) => (
            <label
              key={tag}
              htmlFor={tag}
              className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out ${
                tags[tag as keyof TagsType] ? 'bg-blue-200' : 'bg-gray-100'
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                name={tag}
                id={tag}
                checked={tags[tag as keyof TagsType]}
                onChange={handleTagChange}
              />
              <span className={`w-5 h-5 rounded-full ${tag === 'work' ? 'bg-purple-400' : tag === 'study' ? 'bg-sky-400' : tag === 'entertainment' ? 'bg-pink-400' : 'bg-green-400'}`}></span>
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
