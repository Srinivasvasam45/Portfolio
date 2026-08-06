import { ReviewOnScroll } from "../ReviewOnScroll";

export const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen py-28 px-4">
      <ReviewOnScroll className="w-full">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-[#12181f]/80 backdrop-blur shadow-[0_0_80px_rgba(126,231,135,0.06)] overflow-hidden animate-float">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 chrome-dots">
              <span className="bg-[#ff5f56]" />
              <span className="bg-[#ffbd2e]" />
              <span className="bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-gray-500">srinivas@portfolio: ~</span>
            </div>

            <div className="p-6 sm:p-10 text-center font-mono">
              <p className="text-sm text-[#7ee787] mb-4">$ whoami</p>

              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                Hi, I'm Srinivas Vasam
              </h1>

              <p className="font-sans text-base md:text-lg text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                Full-Stack Developer with a strong foundation
                in HTML, CSS, JavaScript, and React. Passionate about building modern,
                responsive, and user-centric web applications while continuously
                improving through real-world projects. Currently expanding my skills
                in the MERN stack to build scalable and impactful software solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-3 font-sans">
                <a
                  href="#projects"
                  className="bg-[#7ee787] text-[#04120a] font-semibold py-3 px-6 rounded-md transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-[#58a6ff]/40 text-[#58a6ff] py-3 px-6 rounded-md font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#58a6ff]/10"
                >
                  Contact Me
                </a>
                <a
                  href="https://docs.google.com/document/d/1-QQP7nPhKTtR0NF8_g0t4CyIR9ew5Lj8/edit?usp=drive_link&ouid=100892000215244859329&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/15 text-gray-200 py-3 px-6 rounded-md font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
