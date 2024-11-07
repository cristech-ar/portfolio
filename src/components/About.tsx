export default function About({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="about" className={`min-h-screen py-20 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co/1ZFDN8d/1718368442737.jpg"
                alt="Cristian Rios"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello, I'm Cris. I have been working in the IT field for the past 10 years. 
              Currently, I am a full-stack freelance programmer, collaborating with several 
              customers around the world. My expertise lies in the JavaScript technology stack, 
              working with Node.js for the backend, React and Angular for the frontend.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am passionate about technology, always seeking new challenges, and using 
              creativity to develop innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}