import { useState } from 'react';
import { ReviewOnScroll } from '../ReviewOnScroll';

/* ============================================================
   Icons — nav/link icons + a small tech-badge set.
   Tech icons are simplified, generic glyphs (not brand logos)
   so they stay license-safe while still being recognizable.
   ============================================================ */
const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const ExternalIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HtmlIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" {...props}>
    <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 6l-4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CssIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" {...props}>
    <path d="M5 4h14l-1.4 15L12 21l-5.6-2L5 4Z" strokeLinejoin="round" />
    <path d="M8 8h8l-.3 3.5H9.6L10 15l2 .6 2-.6.2-2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const JsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9.5 9v6.2c0 1.2-.9 1.6-1.8 1.2M16.3 9.2c-.4-.3-1-.5-1.6-.5-1 0-1.7.6-1.7 1.4 0 1.9 3.3 1.1 3.3 3.1 0 .9-.8 1.5-1.8 1.5-.8 0-1.4-.3-1.9-.8" strokeLinecap="round" />
  </svg>
);

const ReactIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="14" height="14" {...props}>
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
  </svg>
);

const TailwindIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" {...props}>
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.36.98 1 2.11 2.14 4.6 2.14 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.36C15.62 7.14 14.49 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.36.98 1 2.11 2.14 4.6 2.14 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.36-.98-1-2.11-2.14-4.6-2.14Z" />
  </svg>
);

const NodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14" {...props}>
    <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" strokeLinejoin="round" />
    <path d="M12 3v18M4 7l8 4 8-4M4 17l8-4 8 4" strokeLinejoin="round" />
  </svg>
);

const ExpressIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" {...props}>
    <path d="M8 4c-2.2 0-3.5 2-3.5 4.5S5.8 13 8 13M16 20c2.2 0 3.5-2 3.5-4.5S18.2 11 16 11" strokeLinecap="round" />
    <path d="M4 20h4M16 4h4" strokeLinecap="round" />
  </svg>
);

const MongoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14" {...props}>
    <path d="M12 3c3 3.2 4.5 6.7 4.5 10 0 3-2 5.4-4.5 6.5C9.5 18.4 7.5 16 7.5 13c0-3.3 1.5-6.8 4.5-10Z" strokeLinejoin="round" />
    <path d="M12 15.5V21" strokeLinecap="round" />
  </svg>
);

const ReduxIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path d="M8 13.5a5 5 0 0 1 8-4" strokeLinecap="round" />
    <path d="M14.2 7l2 2.2-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" {...props}>
    <path d="M12 2l1.8 5.6L19.5 9l-5.7 1.8L12 16.6l-1.8-5.8L4.5 9l5.7-1.4L12 2Z" />
    <path d="M19 15l.9 2.6L22.5 18l-2.6.9L19 21.5l-.9-2.6L15.5 18l2.6-.4L19 15Z" opacity="0.7" />
  </svg>
);

/* ============================================================
   Project illustrations — one small original line-art scene per
   project, keyed by `file`, so each card's image actually reflects
   what that project is (not a generic placeholder). All original
   vector art in the site's own palette — nothing hotlinked in.
   ============================================================ */
const TodoIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <rect x="30" y="14" width="140" height="102" rx="10" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
    {[0, 1, 2, 3].map((i) => {
      const y = 34 + i * 21;
      const done = i < 2;
      return (
        <g key={i}>
          <rect
            x="46" y={y} width="14" height="14" rx="4"
            stroke={color} strokeWidth="1.8"
            fill={done ? color : 'none'} fillOpacity={done ? 0.28 : 0}
          />
          {done && (
            <path d={`M49 ${y + 7.5} l3 3 l6.5 -7.5`} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <line x1="70" y1={y + 7} x2={done ? 128 : 150} y2={y + 7} stroke={color} strokeOpacity={done ? 0.3 : 0.55} strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    })}
  </svg>
);

const WeatherIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <circle cx="68" cy="52" r="22" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.14" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={68 + Math.cos(a) * 30} y1={52 + Math.sin(a) * 30}
          x2={68 + Math.cos(a) * 38} y2={52 + Math.sin(a) * 38}
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"
        />
      );
    })}
    <path
      d="M88 92c-3-13-25-15-30-3-14-1-16 19 0 19h38c15 0 13-18-8-16Z"
      stroke={color} strokeWidth="2" fill={color} fillOpacity="0.16"
    />
    <g strokeLinecap="round">
      <line x1="152" y1="38" x2="152" y2="94" stroke={color} strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="152" cy="100" r="9" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.22" />
    </g>
  </svg>
);

const DashboardIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <rect x="20" y="16" width="160" height="98" rx="10" stroke={color} strokeOpacity="0.35" strokeWidth="2" />
    {[30, 50, 38, 60, 44].map((h, i) => (
      <rect key={i} x={40 + i * 26} y={92 - h} width="14" height={h} rx="3" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.18" />
    ))}
    <line x1="34" y1="92" x2="176" y2="92" stroke={color} strokeOpacity="0.5" strokeWidth="1.6" />
    {[0, 1, 2].map((i) => (
      <circle key={i} cx={44 + i * 14} cy="30" r="7" stroke={color} strokeWidth="1.6" fill={color} fillOpacity={0.14 + i * 0.06} />
    ))}
  </svg>
);

const NotesIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <g transform="rotate(-8 100 65)">
      <rect x="55" y="20" width="90" height="90" rx="8" stroke={color} strokeOpacity="0.3" strokeWidth="2" />
    </g>
    <g transform="rotate(5 100 65)">
      <rect x="55" y="20" width="90" height="90" rx="8" stroke={color} strokeOpacity="0.5" strokeWidth="2" fill={color} fillOpacity="0.06" />
    </g>
    <rect x="60" y="30" width="80" height="70" rx="6" stroke={color} strokeWidth="2" fill="#0f141c" />
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1="72" y1={46 + i * 12} x2={i === 3 ? 108 : 128} y2={46 + i * 12} stroke={color} strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
    ))}
  </svg>
);

const AudioIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <circle cx="60" cy="65" r="38" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
    <circle cx="60" cy="65" r="20" stroke={color} strokeWidth="1.2" strokeOpacity="0.25" />
    <circle cx="60" cy="65" r="7" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" />
    {[24, 42, 30, 50, 20].map((h, i) => (
      <rect key={i} x={122 + i * 14} y={95 - h} width="8" height={h} rx="3" fill={color} fillOpacity="0.55" />
    ))}
  </svg>
);

const FoodReelsIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <circle cx="88" cy="65" r="42" stroke={color} strokeWidth="2" strokeOpacity="0.45" />
    <circle cx="88" cy="65" r="28" stroke={color} strokeWidth="1.4" strokeOpacity="0.28" />
    <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55">
      <line x1="26" y1="28" x2="26" y2="102" />
      <line x1="20" y1="28" x2="20" y2="48" />
      <line x1="26" y1="28" x2="26" y2="48" />
      <line x1="32" y1="28" x2="32" y2="48" />
      <path d="M158 28c10 6 10 22 0 28v46" />
    </g>
    <circle cx="150" cy="95" r="18" stroke={color} strokeWidth="2" fill="#0f141c" />
    <path d="M145 87l14 8-14 8Z" fill={color} fillOpacity="0.85" />
  </svg>
);

const InterviewIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    {/* resume */}
    <rect x="18" y="16" width="62" height="98" rx="8" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
    <circle cx="38" cy="34" r="7" stroke={color} strokeWidth="1.6" strokeOpacity="0.55" />
    {[0, 1, 2, 3, 4].map((i) => (
      <line
        key={i}
        x1="30" y1={54 + i * 11}
        x2={i % 2 === 0 ? 70 : 60} y2={54 + i * 11}
        stroke={color} strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round"
      />
    ))}
    {/* dashed link from resume to AI */}
    <path d="M84 65h30" stroke={color} strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M110 58l8 7-8 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
    {/* AI chat bubble */}
    <rect x="128" y="22" width="56" height="42" rx="12" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
    <path d="M144 64l-6 12 14-9Z" fill={color} fillOpacity="0.6" />
    {[0, 1, 2].map((i) => (
      <circle key={i} cx={144 + i * 10} cy="43" r="3" fill={color} fillOpacity="0.65" />
    ))}
    {/* mic / voice waveform */}
    <g stroke={color} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
      <line x1="138" y1="96" x2="138" y2="110" />
      <line x1="148" y1="90" x2="148" y2="116" />
      <line x1="158" y1="98" x2="158" y2="108" />
      <line x1="168" y1="92" x2="168" y2="114" />
    </g>
  </svg>
);

const ReduxTodoIllustration = ({ color }) => (
  <svg viewBox="0 0 200 130" className="h-[64%] w-auto" fill="none">
    <rect x="20" y="14" width="118" height="102" rx="10" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
    {[0, 1, 2, 3].map((i) => {
      const y = 34 + i * 21;
      const done = i < 2;
      return (
        <g key={i}>
          <rect
            x="36" y={y} width="14" height="14" rx="4"
            stroke={color} strokeWidth="1.8"
            fill={done ? color : 'none'} fillOpacity={done ? 0.28 : 0}
          />
          {done && (
            <path d={`M39 ${y + 7.5} l3 3 l6.5 -7.5`} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <line x1="60" y1={y + 7} x2={done ? 114 : 128} y2={y + 7} stroke={color} strokeOpacity={done ? 0.3 : 0.55} strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    })}
    {/* redux store loop — represents the centralized store driving updates */}
    <g transform="translate(166 65)">
      <circle r="24" stroke={color} strokeWidth="2" strokeOpacity="0.45" />
      <path d="M-14 -10a18 18 0 1 1 -2 22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.65" fill="none" />
      <path d="M-18 8l4 8 8-4Z" fill={color} fillOpacity="0.75" />
    </g>
  </svg>
);

/* file → illustration. Add an entry whenever a new project needs one;
   anything without a match just falls back to no illustration (tint only). */
const ILLUSTRATIONS = {
  'todo-list.jsx': TodoIllustration,
  'weather-report.jsx': WeatherIllustration,
  'employee-management.jsx': DashboardIllustration,
  'notes-app.jsx': NotesIllustration,
  'spotify-api.js': AudioIllustration,
  'zomato-reels.jsx': FoodReelsIllustration,
  'ai-interviewer.jsx': InterviewIllustration,
  'todo-redux.jsx': ReduxTodoIllustration,
};

/* Map each tag string (as used in `projects` below) to an icon + brand-ish tint.
   Add an entry here any time you introduce a new tag so it renders a matching badge. */
const TECH_META = {
  html: { label: 'HTML', icon: HtmlIcon, color: '#e37933' },
  css: { label: 'CSS', icon: CssIcon, color: '#5a9bf6' },
  javascript: { label: 'JavaScript', icon: JsIcon, color: '#e3c23c' },
  react: { label: 'React', icon: ReactIcon, color: '#58a6ff' },
  tailwindcss: { label: 'Tailwind CSS', icon: TailwindIcon, color: '#38bdf8' },
  'node.js': { label: 'Node.js', icon: NodeIcon, color: '#7ee787' },
  'express.js': { label: 'Express', icon: ExpressIcon, color: '#c9d1d9' },
  mongodb: { label: 'MongoDB', icon: MongoIcon, color: '#5fd08a' },
  'redux toolkit': { label: 'Redux Toolkit', icon: ReduxIcon, color: '#764abc' },
  'openai api': { label: 'OpenAI API', icon: SparkleIcon, color: '#10a37f' },
};

const techMeta = (tag) =>
  TECH_META[tag.toLowerCase()] || { label: tag, icon: HtmlIcon, color: '#8b949e' };

const hostnameOf = (url) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
};

/* ============================================================
   PROJECT DATA — content preserved exactly as provided.

   ⭐ TO CHANGE WHICH 3 PROJECTS ARE FEATURED:
   Just flip `featured: true/false` on any project below.
   The section auto-picks whichever ones are marked true and
   files everything else under "See all projects".

   🖼️ TO ADD A REAL SCREENSHOT:
   Set `image` to an image path/URL. Leave it null to fall back
   to the generated tech-tinted preview panel.
   ============================================================ */
const projects = [
  {
    file: 'zomato-reels.jsx',
    title: 'Zomato Reels — Full Stack Food Discovery Platform',
    description:
      "A full-stack food discovery platform inspired by Zomato, built with React, Node.js, Express.js, and MongoDB. The application allows users to explore restaurants, view menus, and discover food options through an interactive interface. It features user authentication, restaurant listings, and a dynamic search functionality. The backend is designed with RESTful APIs to handle data retrieval and management efficiently. The project demonstrates the integration of frontend and backend technologies to create a seamless user experience for food enthusiasts.",
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Srinivasvasam45/Zomato_Reel_application',
    live: 'https://github.com/Srinivasvasam45/Zomato_Reel_application',
    image: null,
    featured: true,
  },
  {
    file: 'spotify-api.js',
    title: 'Spotify Backend API – Role-Based Music Streaming Platform',
    description:
      'Designed and developed a scalable backend for a Spotify-inspired music streaming platform using Node.js, Express.js, and MongoDB. Implemented role-based authentication and authorization with two user roles: Artists and Listeners. Artists can create and manage songs and albums, while listeners can browse and access music through secure RESTful APIs. Built modular APIs, optimized database operations, and followed clean architecture principles to create a secure and maintainable backend application. Tech Stack: Node.js • Express.js • MongoDB • Mongoose • JWT • REST API • Postman',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Srinivasvasam45/spotify',
    live: 'https://spotify-r4e1.onrender.com',
    image: null,
    featured: true,
  },
  {
    file: 'employee-management.jsx',
    title: 'Employee Management System',
    description:
      'A modern and responsive Employee Management Dashboard built with React that streamlines employee record management through an intuitive and interactive interface. The application enables seamless CRUD operations, real-time search and filtering, and persistent data storage using Local Storage for an efficient user experience. Developed with reusable React components and React Hooks (useState, useEffect), it follows a scalable component-based architecture to ensure clean, maintainable, and modular code. The dashboard is designed with a responsive layout, allowing smooth accessibility across desktop and mobile devices. Built with a focus on performance, usability, and modern frontend development practices, the project demonstrates the implementation of real-world business workflows and effective client-side state management.',
    tags: ['React', 'tailwindcss'],
    github: 'https://github.com/Srinivasvasam45/Employee_Management_System',
    live: 'https://employee-management-system-pink-seven.vercel.app/',
    image: null,
    featured: true,
  },
  {
    file: 'ai-interviewer.jsx',
    title: 'AI Interviewer — Personalized Interview Prep Platform',
    description:
      "An AI-powered interview preparation platform that helps candidates rehearse for real job interviews. Users create an account, log in, and start a new interview session by submitting a job description and their resume. An AI agent analyzes both inputs and generates a customized set of interview questions tailored to the role's requirements and the candidate's background, then runs an interactive mock-interview session. Built with a React frontend and a Node.js/Express backend, with MongoDB storing users, sessions, and interview history, the project ties together authentication, structured text input, and AI-driven content generation into one workflow.",
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
    github: 'https://github.com/Srinivasvasam45/Ai_Interviewer',
    live: 'https://github.com/Srinivasvasam45/ai-interviewer',
    image: null,
    featured: false,
  },
  {
    file: 'todo-redux.jsx',
    title: 'To-Do List — Redux Toolkit Edition',
    description:
      'A to-do list application rebuilt around Redux Toolkit to demonstrate professional, scalable state management in React. Tasks are managed through a Redux slice built with createSlice and configureStore, replacing ad-hoc component state with a single, predictable store. The app supports adding, completing, editing, and deleting tasks, with every state transition handled through dispatched actions and reducers rather than local state. Built with React and styled with Tailwind CSS, the project showcases the state-management patterns used in production-scale applications.',
    tags: ['React', 'Redux Toolkit', 'tailwindcss'],
    github: 'https://github.com/Srinivasvasam45/Todo_using_redux',
    live: 'https://todo-using-redux-opal.vercel.app/',
    image: null,
    featured: false,
  },
  {
    file: 'todo-list.jsx',
    title: 'Todo List Web Application',
    description:
      "A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information through Weather API integration. It leverages the Fetch API and Async/Await to retrieve and display dynamic weather data, including temperature, humidity, wind speed, and weather conditions. The application incorporates input validation and error handling to ensure reliable user interactions while delivering a clean, responsive, and intuitive interface across multiple devices.",
    tags: ['Html', 'Css', 'JavaScript'],
    github: 'https://github.com/Srinivasvasam45/TO_DO_LIST',
    live: 'https://to-do-list-rose-tau.vercel.app/',
    image: null,
    featured: false,
  },
  {
    file: 'weather-report.jsx',
    title: 'Weather Report Web Application',
    description:
      'A responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. It utilizes React Hooks for efficient state management and follows a reusable component-based architecture to deliver a seamless user experience. Designed with a focus on simplicity and performance, the application ensures smooth interaction while maintaining an organized workflow. The responsive layout provides a consistent experience across desktop and mobile devices.',
    tags: ['Html', 'Css', 'JavaScript'],
    github: 'https://github.com/Srinivasvasam45/Weather_Report',
    live: 'https://weather-report-xi-blush.vercel.app/',
    image: null,
    featured: false,
  },
  {
    file: 'notes-app.jsx',
    title: 'Notes Management Application',
    description:
      'A modern and responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. The application leverages React Hooks for efficient state management and follows a reusable component-based architecture to ensure scalability and maintainability. Designed with a focus on simplicity and usability, it delivers a seamless note management experience across desktop and mobile devices while demonstrating modern React development practices.',
    tags: ['React', 'tailwindcss'],
    github: 'https://github.com/Srinivasvasam45/Notes_app',
    live: 'https://notes-app-gamma-flax-77.vercel.app/',
    image: null,
    featured: false,
  },
];

/* Browser-mockup preview panel: real screenshot if `image` is set,
   otherwise a tech-tinted generated panel using the project's primary tag. */
const ProjectPreview = ({ project }) => {
  const primary = techMeta(project.tags[0]);
  const Illustration = ILLUSTRATIONS[project.file];

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="preview-pattern flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ '--tint': primary.color }}
        >
          {Illustration && <Illustration color={primary.color} />}
          <span
            className="absolute bottom-4 left-4 font-mono text-[11px] tracking-wide opacity-70"
            style={{ color: primary.color }}
          >
            {project.file}
          </span>
        </div>
      )}

      {/* hover overlay CTA */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#0a0e14]/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-[#0a0e14]/55 group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
        <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/15 bg-[#12181f]/90 px-4 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ExternalIcon width={13} height={13} /> View live
        </span>
      </div>
    </div>
  );
};

const TechBadge = ({ tag }) => {
  const meta = techMeta(tag);
  const Icon = meta.icon;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors"
      style={{
        color: meta.color,
        borderColor: `${meta.color}33`,
        backgroundColor: `${meta.color}14`,
      }}
    >
      <Icon /> {meta.label}
    </span>
  );
};

const ProjectCard = ({ project, index, animateIn }) => (
  <div
    className={[
      'group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#12181f]/60',
      'transition-all duration-300 ease-out',
      'hover:-translate-y-1.5 hover:border-[#7ee787]/30 hover:shadow-[0_12px_36px_rgba(126,231,135,0.10)]',
      animateIn ? 'animate-fade-up' : '',
    ].join(' ')}
    style={animateIn ? { animationDelay: `${index * 90}ms` } : undefined}
  >
    {/* address bar */}
    <div className="flex items-center gap-1.5 px-4 py-2.5 chrome-dots bg-white/[0.02]">
      <span className="bg-[#ff5f56]" />
      <span className="bg-[#ffbd2e]" />
      <span className="bg-[#27c93f]" />
      <span className="ml-3 truncate font-mono text-xs text-gray-500">
        {hostnameOf(project.live)}
      </span>
      <span className="ml-auto shrink-0 font-mono text-[11px] text-gray-600">0{index + 1}</span>
    </div>

    <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
      <ProjectPreview project={project} />
    </a>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="mb-2.5 text-xl font-bold text-white">{project.title}</h3>
      <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="mb-5 mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechBadge key={tag} tag={tag} />
        ))}
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-[#7ee787]"
        >
          <GitHubIcon /> Source
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-[#58a6ff]"
        >
          <ExternalIcon /> Live demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const remainingProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-4">
      <ReviewOnScroll className="w-full">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow justify-center"><span className="slash">//</span> 02 projects/</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.file} project={project} index={index} />
            ))}
          </div>

          {remainingProjects.length > 0 && (
            <>
              {showAll && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingProjects.map((project, index) => (
                    <ProjectCard
                      key={project.file}
                      project={project}
                      index={index}
                      animateIn
                    />
                  ))}
                </div>
              )}

              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 font-mono text-sm text-gray-300 transition-all hover:border-[#7ee787]/40 hover:bg-[#7ee787]/[0.06] hover:text-[#7ee787]"
                >
                  {showAll ? 'Show less' : `See all projects (${projects.length})`}
                  <ChevronIcon
                    className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;