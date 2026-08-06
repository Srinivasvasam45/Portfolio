import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home.jsx' },
  { id: 'about', label: 'About.jsx' },
  { id: 'projects', label: 'Projects.jsx' },
  { id: 'contact', label: 'Contact.jsx' },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b transition-colors duration-300 ${
        scrolled ? 'bg-black/80 border-white/10' : 'bg-black/30 border-white/5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-lg font-bold text-white flex items-center gap-2 shrink-0">
            <span className="text-[#7ee787]">&gt;_</span>
            Srinivas<span className="text-[#58a6ff]">Vasam</span>
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="w-9 h-9 flex items-center justify-center rounded-md border border-white/10 text-gray-200 cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center gap-1 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  active === item.id
                    ? 'text-[#7ee787] bg-[#7ee787]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-[#7ee787] rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
