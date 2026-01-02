
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-6 px-8 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚀</span>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Intern <span className="text-blue-400">Spark</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-6 font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Find Internships</a>
          <a href="#" className="hover:text-white transition-colors">For Employers</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
