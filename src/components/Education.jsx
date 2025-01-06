import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education & Certifications</h2>
        
        <div className="space-y-8">
          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Chartered Accountant (CA)</h3>
                <p className="text-gray-600">Institute of Chartered Accountants of India</p>
                <p className="text-sm text-gray-500">2018 - 2021</p>
              </div>
            </div>
          </div>
          
          {/* Bachelor of Commerce */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Commerce</h3>
                <p className="text-gray-600">University of Delhi</p>
                <p className="text-sm text-gray-500">2015 - 2018</p>
              </div>
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Certifications */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  GST Practitioner Certification
                </li>
                <li className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  Certified Financial Analyst
                </li>
              </ul>
            </div>
            
            {/* Achievements */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  All India Rank - Top 50 in CA Final
                </li>
                <li className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  Best Student Award - B.Com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
