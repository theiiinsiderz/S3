import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A dedicated Chartered Accountant with expertise in financial analysis, 
              taxation, and corporate finance. Passionate about helping businesses 
              optimize their financial strategies and achieve sustainable growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Certified CA</h3>
                <p className="text-sm text-gray-600">ICAI Member</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">50+ Clients</h3>
                <p className="text-sm text-gray-600">Served Successfully</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-start justify-start space-x-6 p-6">
              <div className="space-y-2">
                <p className="text-slate-800">Skills & Expertise:</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    Financial Analysis
                  </li>
                  <li className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    Tax Planning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    Corporate Finance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    Audit & Assurance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
