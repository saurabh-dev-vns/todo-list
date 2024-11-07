//src\components\todoForm.tsx
import React, { useState } from 'react';

type TodoFormProps = {
  onClose: () => void;
};

type TagsType = {
  work: boolean;
  study: boolean;
  entertainment: boolean;
  family: boolean;
};

export const TodoForm: React.FC<TodoFormProps> = ({ onClose }) => {
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
    console.log('Form Data:', formData);

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
    <div className="absolute w-full h-screen flex justify-center items-center bg-opacity-50 bg-black left-0 top-0 " >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg w-full bg-white overflow-hidden p-8 space-y-4 rounded-lg"
      >
        <div className="flex flex-row w-full justify-between">
          <button type="button" className="font-semibold capitalize text-gray-500" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-500 text-white p-1 px-4 rounded-md hover:bg-gray-600 focus:bg-gray-600"
          >
            Add
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <label className='font-semibold font-mono text-stone-600 text-xl' htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="add a title"
          className="p-2 border rounded-md text-stone-600 font-mono"
          autoFocus
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className='font-semibold font-mono text-stone-600 text-xl' htmlFor="description">Description</label>
        <textarea
          placeholder="add a description"
          className="p-2 border rounded-md text-stone-600 font-mono"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className='font-semibold font-mono text-stone-600 text-xl' htmlFor="tags">Tags</label>
        <div className="flex flex-row gap-x-2">

          <label
            htmlFor="work"
            className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg ${
              tags.work ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only "
              name="work"
              id="work"
              checked={tags.work}
              onChange={handleTagChange}
            />
            <span className="w-5 h-5 bg-purple-400 rounded-full"></span>
            <span>work</span>
          </label>

          <label
            htmlFor="study"
            className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg ${
              tags.study ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              name="study"
              id="study"
              checked={tags.study}
              onChange={handleTagChange}
            />
            <span className="w-5 h-5 bg-sky-400 rounded-full"></span>
            <span>study</span>
          </label>

          <label
            htmlFor="entertainment"
            className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg ${
              tags.entertainment ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              name="entertainment"
              id="entertainment"
              checked={tags.entertainment}
              onChange={handleTagChange}
            />
            <span className="w-5 h-5 bg-pink-400 rounded-full"></span>
            <span>entertainment</span>
          </label>

          <label
            htmlFor="family"
            className={`relative inline-flex items-center cursor-pointer gap-x-1 px-2 py-1 rounded-lg ${
              tags.family ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              name="family"
              id="family"
              checked={tags.family}
              onChange={handleTagChange}
            />
            <span className="w-5 h-5 bg-green-400 rounded-full"></span>
            <span>family</span>
          </label>
        </div>
      </form>
    </div>
  );
};
