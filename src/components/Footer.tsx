import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Cristian Ríos. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/christian-rios-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}