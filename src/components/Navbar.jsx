import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CA Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <div className="space-y-4">
            <a href="#home" className="block text-lg text-gray-800 font-semibold py-2 hover:text-blue-600">Home</a>
            <a href="#about" className="block text-lg text-gray-800 font-semibold py-2 hover:text-blue-600">About</a>
            <a href="#education" className="block text-lg text-gray-800 font-semibold py-2 hover:text-blue-600">Education</a>
            <a href="#experience" className="block text-lg text-gray-800 font-semibold py-2 hover:text-blue-600">Experience</a>
            <a href="#contact" className="block text-lg text-gray-800 font-semibold py-2 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
