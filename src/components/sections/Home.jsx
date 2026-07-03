import {ReviewOnScroll} from "../ReviewOnScroll";
export const Home = () => {
    return (
        <section id="home" className="flex relative items-center justify-center min-h-screen">
          <ReviewOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600  bg-clip-text  text-transparent leading-right">Hi, I'm Srinivas Vasam </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto mb-8">
                Full-Stack Developer with a strong foundation 
                in HTML, CSS, JavaScript, and React. Passionate about building modern,
                 responsive, and user-centric web applications while continuously 
                 improving through real-world projects. Currently expanding my skills 
                 in the MERN stack to build scalable and impactful software solutions.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white font-semibold py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contact" className=" border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover: bg-blue-500/10">
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/file/d/1r679o7UM-yxsQZ-4X2_jBZfmXiQytg2w/view?usp=drive_link" className="bg-blue-500 text-white font-semibold py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Resume
                    </a>
                </div>
            </div>
          </ReviewOnScroll>
        </section>
    );
}
export default Home;