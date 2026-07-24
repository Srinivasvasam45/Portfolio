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
                   A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information through Weather API integration. 
                   It leverages the Fetch API and Async/Await to retrieve and display dynamic weather data, including temperature, humidity, wind speed, and weather
                    conditions. The application incorporates input validation and error handling to ensure reliable user interactions while delivering a clean, responsive,
                     and intuitive interface across multiple devices.
                </p>
                <div>
                    {["Html","Css","JavaScript"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="https://github.com/Srinivasvasam45/TO_DO_LIST" className="text-blue-400 flex flex-row hover:text-blue-300  transition-colors my-4">
                     View Project ➜ <img  className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUv9TdB7j4S16US3-ZeaEc9XXt1uM2j8XF7P6Tm93TQ&s'></img>  
                     <a href='https://to-do-list-rose-tau.vercel.app/'> 
                        <img className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIouR9szTw6K96xEMO-GSavuC3v0OGkyKcNHZP_ZbVIw&s=10'></img> </a> 
                    </a>
                     
                </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Weather Report Web Application</h3>
                <p className='text-gray-400 mb-4'>
                  A responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. 
                  It utilizes React Hooks for efficient state management and follows a reusable component-based architecture to deliver a seamless user experience. 
                  Designed with a focus on simplicity and performance, the application ensures smooth interaction while maintaining an organized workflow. The 
                  responsive layout provides a consistent experience across desktop and mobile devices.
                </p>
                <div>
                    {["Html","Css","JavaScript"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="https://github.com/Srinivasvasam45/Weather_Report" className="text-blue-400 flex flex-row hover:text-blue-300  transition-colors my-4">
                     View Project ➜ <img  className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUv9TdB7j4S16US3-ZeaEc9XXt1uM2j8XF7P6Tm93TQ&s'></img>  
                     <a href='https://weather-report-xi-blush.vercel.app/'> 
                        <img className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIouR9szTw6K96xEMO-GSavuC3v0OGkyKcNHZP_ZbVIw&s=10'></img> </a> 
                    </a>
                     
                </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Employee Management System</h3>
                <p className='text-gray-400 mb-4'>
                  A modern and responsive Employee Management Dashboard built with React that streamlines employee record management through an intuitive and interactive interface.
                   The application enables seamless CRUD operations, real-time search and filtering, and persistent data storage using Local Storage for an efficient user experience. 
                   Developed with reusable React components and React Hooks (useState, useEffect), it follows a scalable component-based architecture to ensure clean, maintainable, 
                   and modular code. The dashboard is designed with a responsive layout, allowing smooth accessibility across desktop and mobile devices. Built with a focus on performance,
                    usability, and modern frontend development practices, the project demonstrates the implementation of real-world business workflows and effective client-side state management.
                </p>
                <div>
                    {["React"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="https://github.com/Srinivasvasam45/Employee_Management_System" className="text-blue-400 flex flex-row hover:text-blue-300  transition-colors my-4">
                     View Project ➜ <img  className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUv9TdB7j4S16US3-ZeaEc9XXt1uM2j8XF7P6Tm93TQ&s'></img>  
                     <a href='https://employee-management-system-pink-seven.vercel.app/'> 
                        <img className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIouR9szTw6K96xEMO-GSavuC3v0OGkyKcNHZP_ZbVIw&s=10'></img> </a> 
                    </a>
                     
                </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Notes Management Application</h3>
                <p className='text-gray-400 mb-4'>
                   A modern and responsive note-taking application built with React that enables users to create, edit, and delete notes through a clean and intuitive interface. 
                   The application leverages React Hooks for efficient state management and follows a reusable component-based architecture to ensure scalability and maintainability.
                    Designed with a focus on simplicity and usability, it delivers a seamless note management experience across desktop and mobile devices while demonstrating modern 
                    React development practices.
                </p>
                <div>
                    {["React"].map((tech,key) => (
                        <span key={tech} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="https://github.com/Srinivasvasam45/Notes_app" className="text-blue-400 flex flex-row hover:text-blue-300  transition-colors my-4">
                     View Project ➜ <img  className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUv9TdB7j4S16US3-ZeaEc9XXt1uM2j8XF7P6Tm93TQ&s'></img>  
                     <a href='https://notes-app-gamma-flax-77.vercel.app/'> 
                        <img className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIouR9szTw6K96xEMO-GSavuC3v0OGkyKcNHZP_ZbVIw&s=10'></img> </a> 
                    </a>
                     
                </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10  hovetr:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                <h3  className='text-xl font-bold mb-4'>Spotify Backend API – Role-Based Music Streaming Platform</h3>
                <p className='text-gray-400 mb-4'>
                   Designed and developed a scalable backend for a Spotify-inspired music streaming platform using Node.js, Express.js, and MongoDB. 
                   Implemented role-based authentication and authorization with two user roles: Artists and Listeners. Artists can create and manage songs and albums,
                   while listeners can browse and access music through secure RESTful APIs. Built modular APIs, optimized database operations, and followed clean architecture 
                   principles to create a secure and maintainable backend application.
                   Tech Stack: Node.js • Express.js • MongoDB • Mongoose • JWT • REST API • Postman
                </p>
                <div>
                    {["React"].map((tech,key) => (
                        <span key={Backend} className="inline-block bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                            {Backend}
                        </span>
                    ))}
                </div>

                <div className='flex items-center justify-between'>
                    <a href="https://github.com/Srinivasvasam45/spotify" className="text-blue-400 flex flex-row hover:text-blue-300  transition-colors my-4">
                     View Project ➜ <img  className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUv9TdB7j4S16US3-ZeaEc9XXt1uM2j8XF7P6Tm93TQ&s'></img>  
                     <a href='https://spotify-r4e1.onrender.com'> 
                        <img className='h-8 w-8 bg-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIouR9szTw6K96xEMO-GSavuC3v0OGkyKcNHZP_ZbVIw&s=10'></img> </a> 
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