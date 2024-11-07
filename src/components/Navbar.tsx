export default function Navbar({ darkMode }: { darkMode: boolean }) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-6">
      <nav className={`rounded-2xl backdrop-blur-md w-fit px-8 ${
        darkMode 
          ? 'bg-black/30 text-white shadow-lg shadow-black/20' 
          : 'bg-white/30 text-black shadow-lg shadow-black/5'
      }`}>
        <div className="flex items-center h-14">
          <div className="flex space-x-8">
            {['about','skills','projects', 'career'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize px-2 py-1 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'hover:bg-white/10 hover:text-white' 
                    : 'hover:bg-black/5 hover:text-black'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}