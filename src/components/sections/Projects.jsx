import { ReviewOnScroll } from '../ReviewOnScroll';

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

const projects = [
  {
    file: 'todo-list.jsx',
    title: 'Todo List Web Application',
    description:
      "A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information through Weather API integration. It leverages the Fetch API and Async/Await to retrieve and display dynamic weather data, including temperature, humidity, wind speed, and weather conditions. The application incorporates input validation and error handling to ensure reliable user interactions while delivering a clean, responsive, and intuitive interface across multiple devices.",
    tags: ['Html', 'Css', 'JavaScript'],
    github: 'https://github.com/Srinivasvasam45/TO_DO_LIST',
    live: 'https://to-do-list-rose-tau.vercel.app/',
  },
  {
    file: 'weather-report.jsx',
    title: 'Weather Report Web Application',
    description:
      'A responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. It utilizes React Hooks for efficient state management and follows a reusable component-based architecture to deliver a seamless user experience. Designed with a focus on simplicity and performance, the application ensures smooth interaction while maintaining an organized workflow. The responsive layout provides a consistent experience across desktop and mobile devices.',
    tags: ['Html', 'Css', 'JavaScript'],
    github: 'https://github.com/Srinivasvasam45/Weather_Report',
    live: 'https://weather-report-xi-blush.vercel.app/',
  },
  {
    file: 'employee-management.jsx',
    title: 'Employee Management System',
    description:
      'A modern and responsive Employee Management Dashboard built with React that streamlines employee record management through an intuitive and interactive interface. The application enables seamless CRUD operations, real-time search and filtering, and persistent data storage using Local Storage for an efficient user experience. Developed with reusable React components and React Hooks (useState, useEffect), it follows a scalable component-based architecture to ensure clean, maintainable, and modular code. The dashboard is designed with a responsive layout, allowing smooth accessibility across desktop and mobile devices. Built with a focus on performance, usability, and modern frontend development practices, the project demonstrates the implementation of real-world business workflows and effective client-side state management.',
    tags: ['React'],
    github: 'https://github.com/Srinivasvasam45/Employee_Management_System',
    live: 'https://employee-management-system-pink-seven.vercel.app/',
  },
  {
    file: 'notes-app.jsx',
    title: 'Notes Management Application',
    description:
      'A modern and responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. The application leverages React Hooks for efficient state management and follows a reusable component-based architecture to ensure scalability and maintainability. Designed with a focus on simplicity and usability, it delivers a seamless note management experience across desktop and mobile devices while demonstrating modern React development practices.',
    tags: ['React'],
    github: 'https://github.com/Srinivasvasam45/Notes_app',
    live: 'https://notes-app-gamma-flax-77.vercel.app/',
  },
  {
    file: 'spotify-api.js',
    title: 'Spotify Backend API – Role-Based Music Streaming Platform',
    description:
      'Designed and developed a scalable backend for a Spotify-inspired music streaming platform using Node.js, Express.js, and MongoDB. Implemented role-based authentication and authorization with two user roles: Artists and Listeners. Artists can create and manage songs and albums, while listeners can browse and access music through secure RESTful APIs. Built modular APIs, optimized database operations, and followed clean architecture principles to create a secure and maintainable backend application. Tech Stack: Node.js • Express.js • MongoDB • Mongoose • JWT • REST API • Postman',
    tags: ['React'],
    github: 'https://github.com/Srinivasvasam45/spotify',
    live: 'https://spotify-r4e1.onrender.com',
  },
];

const ProjectCard = ({ project, index }) => (
  <div className="group rounded-xl border border-white/10 bg-[#12181f]/60 overflow-hidden hover:-translate-y-1 hover:border-[#7ee787]/30 hover:shadow-[0_8px_30px_rgba(126,231,135,0.08)] transition-all">
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 chrome-dots bg-white/[0.02]">
      <span className="bg-[#ff5f56]" />
      <span className="bg-[#ffbd2e]" />
      <span className="bg-[#27c93f]" />
      <span className="ml-3 font-mono text-xs text-gray-500">{project.file}</span>
      <span className="ml-auto font-mono text-[11px] text-gray-600">0{index + 1}</span>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tech) => (
          <span
            key={tech}
            className="inline-block font-mono bg-[#58a6ff]/10 text-[#58a6ff] py-1 px-3 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-[#7ee787] transition-colors text-sm font-medium"
        >
          <GitHubIcon /> Source
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-[#58a6ff] transition-colors text-sm font-medium"
        >
          <ExternalIcon /> Live demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-4">
      <ReviewOnScroll className="w-full">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow justify-center"><span className="slash">//</span> 02 projects/</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.file} project={project} index={index} />
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
