import { ReviewOnScroll } from '../ReviewOnScroll'

const SkillGroup = ({ title, items }) => (
  <div className="rounded-xl p-6 border border-white/5 hover:border-[#7ee787]/20 hover:-translate-y-1 transition-all bg-white/[0.02]">
    <h3 className="text-lg font-bold mb-4 font-mono text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="font-mono bg-[#7ee787]/10 text-[#7ee787] px-3 py-1 rounded-full text-sm hover:bg-[#7ee787]/20 hover:shadow-[0_2px_8px_rgba(126,231,135,0.2)] transition"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  const frontendSkills = ["Html", "Css", "JavaScript", "React", "Tailwind CSS","TypeScript"];
  const backendskills = ["Node.js", "Express.js", "MongoDB"];
  const tools = ["Git", "GitHub", "VS Code", "Postman","Redux Toolkit"];
  const other = ["Python ", "Sql", "Power BI"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-4">
      <ReviewOnScroll className="w-full">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow justify-center"><span className="slash">//</span> 01 about-me.js</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-[#12181f]/60 hover:border-white/15 transition-all">
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm a Full Stack MERN Developer who enjoys turning ideas into modern, scalable, and user-friendly web applications. My journey 
              began with HTML, CSS, and JavaScript, and grew into mastering the MERN Stack by building real-world projects using React.js, Node.js, Express.js, and MongoDB.
              I've developed applications such as a Zomato Reels platform for food video discovery and a Spotify-inspired backend featuring role-based authentication 
              and RESTful APIs. Through these projects, I've gained hands-on experience in frontend development, backend architecture, database design, authentication, API 
              integration, deployment, and version control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillGroup title="Frontend" items={frontendSkills} />
              <SkillGroup title="Backend" items={backendskills} />
              <SkillGroup title="Tools" items={tools} />
              <SkillGroup title="Other" items={other} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-[#12181f]/60 hover:border-white/15 transition-all">
              <h3 className="text-xl font-bold mb-5 font-mono text-white flex items-center gap-2">
                <span>🏫</span> Education
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="pl-4 border-l-2 border-[#7ee787]/40">
                  <strong className="text-white block mb-0.5">
                    🎓 Bachelor of Technology in Electronics and Communication Engineering
                  </strong>
                  <span className="text-sm text-gray-400">
                    Vishnu Institute of Technology, Bhimavaram (2022-2026)
                  </span>
                </li>
                <li className="pl-4 border-l-2 border-white/10">
                  <strong className="text-white block mb-0.5">Intermediate</strong>
                  <span className="text-sm text-gray-400">
                    Jawahar Navodaya Vidyalaya, East-Godavari, AP (2020-2022)
                  </span>
                </li>
                <li className="pl-4 border-l-2 border-white/10">
                  <strong className="text-white block mb-0.5">Secondary Higher Education</strong>
                  <span className="text-sm text-gray-400">
                    Jawahar Navodaya Vidyalaya, East-Godavari, AP (2020)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
