const technologies = [
  { name: 'Javascript', icon: 'src/icons/js.svg' },
  { name: 'Angular', icon: 'src/icons/angular.svg' },
  { name: 'React', icon: 'src/icons/react.svg' },
  { name: 'Node.js', icon: 'src/icons/nodejs.svg' },
  { name: 'MongoDB', icon: 'src/icons/mongo.svg' },
  { name: 'SQL', icon: 'src/icons/sql.svg' },
  { name: 'ElasticSearch', icon: 'src/icons/elastic.svg' },
  { name: 'Redis', icon: 'src/icons/redis.svg' },
  { name: 'Docker', icon: 'src/icons/docker.svg' },
  { name: 'AWS', icon: 'src/icons/aws.svg' },
  { name: 'Azure', icon: 'src/icons/azure.svg' },
  { name: 'Linux', icon: 'src/icons/linux.svg' }
];

export default function TechSkills({ darkMode }: { darkMode: boolean }) {
  return (
    <section className={`py-20 min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tech Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-50 hover:shadow-lg'
              }`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-4"
              />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}