  import {ReviewOnScroll} from '../ReviewOnScroll'
  const About = () => {

    const frontendSkills = [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind CSS"
    ]

    const backendskills = [
        "Node.js",
        "Express.js",
        "MongoDB",
        
    ]


    const tools = [
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
    ]

    const other = [
        "Python ",
        "Sql",
        "Power BI",
    ]

    

    return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20 '>
      <ReviewOnScroll> 
      <div className=' max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600  bg-clip-text  text-transparent text-center'> 
        About Me 
        </h2>

        <div className=' rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
            Passionate about transforming ideas into intuitive web applications 
            using JavaScript and React. Dedicated to continuous learning, clean 
            code, and building solutions that create real-world impact.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className="text-xl font-bold mb-4">Frontend </h3>
                    <div className='flex flex-wrap gap-2'>
                       {frontendSkills.map((Tech,key) => (
                        <span key={Tech} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition'>
                            {Tech}
                        </span>
                       ))}
                    </div>
                </div>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className="text-xl font-bold mb-4">Backend </h3>
                    <div className='flex flex-wrap gap-2'>
                       {backendskills.map((backend,key) => (
                        <span key={backend} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition'>
                            {backend}
                        </span>
                       ))}
                    </div>
                </div>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className="text-xl font-bold mb-4">Tools </h3>
                    <div className='flex flex-wrap gap-2'>
                       {tools.map((Tool,key) => (
                        <span key={Tool} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition'>
                            {Tool}
                        </span>
                       ))}
                    </div>
                </div>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className="text-xl font-bold mb-4">Other </h3>
                    <div className='flex flex-wrap gap-2'>
                       {other.map((other,key) => (
                        <span key={other} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition'>
                            {other}
                        </span>
                       ))}
                    </div>
                </div>

            </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='rounded-xl p-6 border-white/10 border  hover:-translate-y-1 transition-all'>
                <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                    <li>
                        <strong> 🎓 Bachelor of Technology in Electronics and Communication Engineering</strong> - Vishnu Institute of Technology, Bhimavaram (2022-2026)
                    </li>

                    <li>
                        <strong>Intermediate</strong> - Jawahar Navodaya Vidyalaya, East-Godavari, AP (2020-2022)
                    </li>
                    <li>
                        <strong>Secondary Higher Education</strong> - Jawahar Navodaya Vidyalaya, East-Godavari, AP (2020)
                    </li>
                    
                </ul>
            </div>   
        </div>
      </div>
      </ReviewOnScroll> 
    </section>
)}

export default About;