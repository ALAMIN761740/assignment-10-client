# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Freelance Task Marketplace

[Live Site](https://assignment-10-client-u7ex.vercel.app/)

## Overview
Freelance Task Marketplace is a web platform that helps individuals find freelancers for small tasks and allows freelancers to discover work opportunities. Users can easily post tasks, bid on tasks, and connect with others based on skills, budget, and deadlines.  

---

## Features
- ✅ *User Authentication*: Secure email/password login and Google authentication.  
- ✅ *Task CRUD Operations*: Users can create, update, and delete tasks.  
- ✅ *Browse & Featured Tasks*: Display featured tasks on the home page and browse all tasks on a dedicated page.  
- ✅ *My Posted Tasks*: Users can view only the tasks they have posted.  
- ✅ *Bidding System*: Users can bid on tasks, and bid counts are displayed.  
- ✅ *Responsive Design*: Fully responsive for mobile, tablet, and desktop views.  
- ✅ *Loading Spinners & Alerts*: Show loading states and success/error messages with toast notifications.  
- ✅ *Dark/Light Theme Toggle*: Switch between dark and light themes on the home page.  
- ✅ *Enhanced UI Effects*: Implement Lottie, Typewriter, Awesome Reveal, or React Tooltip for interactive UI elements.  

---

## Tech Stack
- *Frontend:* React, TailwindCSS, DaisyUI, Framer Motion, Swiper  
- *Backend:* Node.js, Express  
- *Database:* MongoDB  
- *Authentication:* Firebase Authentication (Email/Password & Google Login)  
- *Hosting:* Client - Netlify/Surge/Firebase, Server - Vercel  

---

## Pages & Routes
- *Home:* Banner/Slider, Featured Tasks, extra sections  
- *Add Task:* Private route, task creation form  
- *Browse Tasks:* All tasks displayed in card/table format  
- *Task Details:* Private route, detailed task information, bid count  
- *My Posted Tasks:* Private route, table view with Update/Delete/Bids buttons  
- *Update Task:* Private route/modal to update tasks  
- *Login & Register:* Email/password + Google login, form validation with toast notifications  
- *404 Page:* Custom Not Found page  
- *Loading State:* Spinner displayed during asynchronous operations  

---

## Environment Variables
- Firebase configuration keys and MongoDB credentials are stored in a .env file.  
- Make sure .env is added to .gitignore for security.  

---

## How to Run
1. Clone the client repository:  
   ```bash
   git clone https://github.com/ALAMIN761740/assignment-10-client
assignment-10-client-u7ex.vercel.app
