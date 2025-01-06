import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400"
              alt="John Doe Profile"
              className="rounded-full w-40 h-40 mx-auto mb-8 border-4 border-white shadow-lg"
            />
          </div>

          {/* Name Section */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
            John Doe
          </h1>
          
          {/* Profession Section */}
          <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp">
            Chartered Accountant | Financial Advisor
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com" aria-label="GitHub" className="social-icon-link">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon-link">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:john@example.com" aria-label="Email" className="social-icon-link">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 animate__animated animate__bounce"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
