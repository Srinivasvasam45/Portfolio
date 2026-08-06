const NAV_ITEMS = [
  { id: 'home', label: 'Home.jsx' },
  { id: 'about', label: 'About.jsx' },
  { id: 'projects', label: 'Projects.jsx' },
  { id: 'contact', label: 'Contact.jsx' },
];

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <p className="font-mono text-xs text-gray-500 mb-6">// jump to section</p>

      {NAV_ITEMS.map((item, i) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setMenuOpen(false)}
          className={`font-mono text-2xl font-semibold text-white my-3 transform transition-all duration-300 hover:text-[#7ee787] ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
        >
          <span className="text-[#7ee787] mr-2">0{i + 1}</span>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
