import { ChevronDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative h-screen flex flex-col items-center justify-center ${
      darkMode ? 'text-white bg-black' : 'text-black'
    }`}>
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Technology Background"
          className={`w-full h-full object-cover ${darkMode ? 'opacity-75' : 'opacity-95'}`}
        />
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-b from-black/70 via-black/80 to-black' 
            : 'bg-gradient-to-b from-white/50 via-white/70 to-white/90'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="overflow-hidden mb-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-slide-up">
            Cristian Rios
          </h1>
        </div>
        
        <div className="overflow-hidden">
          <p className={`text-xl md:text-2xl mb-8 tracking-wide animate-slide-up animation-delay-200 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Software Developer
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-slide-up animation-delay-300">
          <a href="https://github.com/cristech-ar" target="_blank" rel="noopener noreferrer"
            className="hover:scale-110 transition-transform">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/christian-rios-dev" target="_blank" rel="noopener noreferrer"
            className="hover:scale-110 transition-transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:your.email@example.com"
            className="hover:scale-110 transition-transform">
            <Mail size={28} />
          </a>
        </div>
        
        <div className="overflow-hidden">
          <a
            href="https://drive.google.com/file/d/12yQRpEAkOPYvzu7rUDEif3zE0PT-IhH9/view?usp=sharing"
            download
            className={`inline-flex items-center px-6 py-3 rounded-full animate-slide-up animation-delay-400 ${
              darkMode 
                ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm' 
                : 'bg-black/80 text-white hover:bg-black/90'
            } transition-all duration-300 shadow-lg`}
          >
            <FileDown size={20} className="mr-2" />
            Download CV
          </a>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 animate-bounce p-4 rounded-full transition-all duration-300 ${
          darkMode 
            ? 'hover:bg-white/10' 
            : 'hover:bg-black/5'
        }`}
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}