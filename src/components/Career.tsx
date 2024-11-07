import { Circle } from 'lucide-react';

const careerSteps = [
  {
    year: '2023',
    company: 'Toolbox',
    role: 'Semi Senior Full Stack Developer | Contractor',
    achievements: [
      'Technologies : Node.js, React, Angular, Mongo DB, ElasticSearch',
      'Architected microservices infrastructure',
      'Media Tools : FFMPEG, subtitle-edit',
      'E2E Development an API to connect the NBC Universal contents with Google, Apple TV and Roku searchhable feeds'
    ]
  },
  {
    year: '2022',
    company: '(To actually) DAC - Argentine film directors asociation',
    role: 'Freelance Software development consultant',
    achievements: [
      '',
      'Support and development of web applications.',
      'Reservations web redesign '
    ]
  },
  {
    year: '2021',
    company: 'DAC - Argentine film directors asociation',
    role: 'Junior Fullstack Developer',
    achievements: [
      'Technologies : Node.js,Express, MySQL ,HTML5, CSS3, Javascript ',
      'Projects : ',
      '- Reservations web app',
      '- Control access system',
      '- ERP'
    ]
  }
];

export default function Career({ darkMode }: { darkMode: boolean }) {
  return (
    <section id='career' className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional career</h2>
        <div className="relative pl-8 ml-12 md:ml-32">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700" />
          
          {careerSteps.map((step, index) => (
            <div key={index} className="relative mb-16">
              {/* Year and circle */}
              <div className="absolute -left-16 md:-left-36 flex items-center">
                <span className="font-bold text-xl mr-4">{step.year}</span>
                <Circle className={`absolute -right-[13px] ${darkMode ? 'text-white fill-gray-900' : 'text-black fill-white'}`} size={24} />
              </div>

              {/* Content */}
              <div className="ml-8">
                <h3 className="text-2xl font-bold mb-2">{step.company}</h3>
                <h4 className={`text-xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.role}</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {step.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}