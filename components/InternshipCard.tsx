
import React from 'react';
import { MatchResult } from '../types';

interface InternshipCardProps {
  job: MatchResult;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ job }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-700 border-green-200';
    if (score >= 50) return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-slate-100 text-slate-600 border-slate-200';
  };

  const getModeStyles = (mode: string) => {
    return mode === 'Online' 
      ? 'bg-sky-50 text-sky-700 border-sky-100' 
      : 'bg-amber-50 text-amber-700 border-amber-100';
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${getModeStyles(job.mode)}`}>
              {job.mode}
            </span>
            <span className="text-slate-400 text-sm">• {job.edu} Required</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-slate-600 font-medium">
            {job.company} <span className="mx-1 text-slate-300">|</span> 📍 {job.loc}
          </p>
        </div>
        
        {job.finalScore > 0 && (
          <div className={`flex flex-col items-center justify-center p-3 rounded-xl border ${getScoreColor(job.finalScore)}`}>
            <span className="text-2xl font-black">{job.finalScore}%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Match</span>
          </div>
        )}
      </div>

      <p className="text-slate-500 text-sm mb-4 line-clamp-2">
        {job.description || "Join our fast-paced team and gain hands-on experience in a professional environment."}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.split(',').map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-100">
            #{skill.trim()}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button className="text-blue-600 font-bold text-sm hover:underline">
          View Details
        </button>
        <button className="px-8 py-2.5 bg-slate-900 hover:bg-black text-white rounded-lg font-bold transition-all shadow-md active:scale-95">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
