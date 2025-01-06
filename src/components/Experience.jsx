import React from 'react';
import { Briefcase, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {/* Senior Financial Analyst */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Senior Financial Analyst</h3>
                  </div>
                  <p className="text-gray-600">ABC Consulting Ltd.</p>
                  <p className="text-sm text-gray-500 mb-4">2021 - Present</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Led financial analysis for 20+ corporate clients</li>
                    <li>Developed tax optimization strategies</li>
                    <li>Managed a team of 5 junior analysts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Tax Consultant */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <div className="ml-12 md:ml-[50%] md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Tax Consultant</h3>
                  </div>
                  <p className="text-gray-600">XYZ & Associates</p>
                  <p className="text-sm text-gray-500 mb-4">2019 - 2021</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Handled tax planning for SMEs</li>
                    <li>Conducted internal audits</li>
                    <li>Prepared financial statements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
