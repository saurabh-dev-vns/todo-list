//src/components/types.ts

export type TodoFormProps = {
  onClose: () => void;
  onSubmit: (task: Omit<Task, 'done' | '_id'>) => void;
};

export type TagsType = {
  work: boolean;
  study: boolean;
  entertainment: boolean;
  family: boolean;
};

// Defining the Task type for structure of a task object
export type Task = {
  title: string;
  description: string;
  tags: string[];
  done: boolean;
  _id: string;
};

export type TaskCardProps = {
  title: string;
  description: string;
  tags: string[];
  done: boolean;
  onToggleDone: () => void;
  onDelete: () => void;
};

// Mapping tag names to their corresponding color classes
export const TAG_COLORS: { [key: string]: string } = {
  work: "bg-purple-400",
  study: "bg-sky-400",
  entertainment: "bg-pink-400",
  family: "bg-green-400",
};
