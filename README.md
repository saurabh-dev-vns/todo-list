# Next.js To-Do Application 🚀

A dynamic and responsive **to-do list application** built using **Next.js** and **TypeScript**. This project is perfect for learning modern frontend development with features like server-side rendering, API routes, and static generation.

---

## 📋 Description

This **To-Do App** helps users manage their daily tasks efficiently. You can add new tasks, mark them as completed, delete them, and organize them using tags.  
The interface is clean, responsive, and optimized for both **desktop and mobile** use.

---

## ✨ Features

- **Add Tasks** – Create new tasks quickly.
- **Delete Tasks** – Remove old or completed items.
- **Mark Complete/Incomplete** – Toggle task status easily.
- **Tagging System** – Categorize tasks using tags (e.g., “Work”, “Personal”).
- **Filter by Tag** – View tasks filtered by specific tags.
- **Responsive Design** – Works seamlessly on all screen sizes.
- **TypeScript Support** – Ensures type safety and better developer experience.

---

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS (recommended setup included below)
- **Package Manager:** npm / yarn / pnpm / bun
- **Deployment Platform:** Vercel

---

## ⚙️ Setup and Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-todo-app.git
cd nextjs-todo-app
```

### 2. Install Dependencies

Use any package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Development Server

Start the local development environment:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Project Structure

```
.
├── public/
│   └── ...                 # Static assets (icons, images, etc.)
├── src/
│   ├── app/
│   │   ├── todo/
│   │   │   └── page.tsx     # Main to-do list page
│   │   ├── layout.tsx       # Root layout for all pages
│   │   └── page.tsx         # Landing or home page
│   ├── components/
│   │   ├── TodoCard.tsx     # Display an individual task
│   │   ├── TodoForm.tsx     # Add new tasks
│   │   ├── TaskList.tsx     # Render list of tasks
│   │   ├── TagFilter.tsx    # Filter tasks by tag
│   │   ├── api.ts           # Helper functions for backend requests
│   │   └── types.ts         # TypeScript interfaces and types
├── .gitignore
├── next.config.ts
├── package.json
└── README.md
```

---

## 🎨 Tailwind CSS Setup (Optional)

If Tailwind CSS is not installed, set it up with:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update **tailwind.config.ts**:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the following to your global CSS file (e.g., `globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧪 Build for Production

To generate an optimized production build:

```bash
npm run build
npm start
```

---

## 🌍 Deployment on Vercel

The easiest way to deploy this Next.js app is using **Vercel** — the creators of Next.js.

1. Go to [Vercel](https://vercel.com/new)
2. Connect your GitHub repository.
3. Click **Deploy**.

For more details, refer to the official [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 💡 Future Enhancements

- Dark mode support  
- Drag-and-drop task sorting  
- Backend integration with Prisma + PostgreSQL  
- Authentication using NextAuth.js  

---
