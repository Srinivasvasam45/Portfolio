  import {ReviewOnScroll} from '../ReviewOnScroll';
  const Projects = () => {
    return (<section id='projects' 
    className="min-h-screen flex items-center justify-center py-20"
    >  <ReviewOnScroll>
       <div className="max-w-5xl mx-auto px-4 ">
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r
           from-blue-500 to-cyan-600  bg-clip-text  text-transparent text-center'
           > Featured Projects
           </h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Todo List Web Application</h3>
                <p className='text-gray-400 mb-4'>
                   Developed a responsive and interactive Todo List web application using HTML, CSS, and JavaScript. Imple-
                   mented CRUD functionality (Create, Read, Update, Delete) for efficient task management. Utilized browser
                   Local Storage to persist user tasks across page refreshes and sessions. Designed a clean and user-friendly inter-
                   face with responsive layouts for desktop and mobile devices. Applied DOM manipulation and event handling
                   to dynamically update tasks without page reloads. Improved code maintainability through modular JavaScript
                   functions and organized project structure
                </p>
                <div>
                    {["Html","Css","JavaScript"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="#" className="text-blue-400 hover:text-blue-300  transition-colors my-4">
                        View Project ➜
                    </a>
                </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Weather Report Web Application</h3>
                <p className='text-gray-400 mb-4'>
                   Developed a responsive weather forecasting web application using HTML, CSS, and JavaScript. Integrated
                   a third-party Weather API to fetch and display real-time weather data based on user input. Implemented
                   asynchronous data fetching using Fetch API and JavaScript promises. Displayed key weather metrics including
                   temperature, humidity, wind speed, and weather conditions. Designed an intuitive and mobile-friendly user
                   interface with responsive layouts. Implemented error handling for invalid city names and API request failures.
                   Enhanced user experience through dynamic content updates without page reloads.
                </p>
                <div>
                    {["Html","Css","JavaScript"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="#" className="text-blue-400 hover:text-blue-300  transition-colors my-4">
                        View Project ➜
                    </a>
                </div>
            </div>
           </div>
       </div>
       </ReviewOnScroll>
    </section>
    );

    
};
export default Projects;