
import React, { useState, useMemo } from 'react';
import { Internship, UserProfile, MatchResult } from './types';
import { INITIAL_INTERNSHIPS } from './constants';
import Sidebar from './components/Sidebar';
import InternshipCard from './components/InternshipCard';
import Header from './components/Header';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    edu: '',
    loc: '',
    mode: 'Online',
    skills: '',
    goal: '',
    lang: ''
  });

  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFindMatches = () => {
    if (!profile.name || !profile.skills) {
      alert("Please fill in at least your Name and Skills!");
      return;
    }

    const calculatedMatches = INITIAL_INTERNSHIPS.map(job => {
      let score = 0;
      const userSkills = profile.skills.toLowerCase();
      const jobSkills = job.skills.toLowerCase();
      const userGoal = profile.goal.toLowerCase();
      const jobTitle = job.title.toLowerCase();

      // 1. Skill & Goal Alignment (Weight: 40)
      const skillList = jobSkills.split(',').map(s => s.trim());
      let skillMatchCount = 0;
      skillList.forEach(s => {
        if (userSkills.includes(s)) skillMatchCount++;
      });
      
      const skillScore = skillList.length > 0 ? (skillMatchCount / skillList.length) * 30 : 0;
      score += skillScore;

      if (userGoal && (jobTitle.includes(userGoal) || job.goal.includes(userGoal))) {
        score += 10;
      }

      // 2. Mode Preference (Weight: 20)
      if (profile.mode === job.mode) {
        score += 20;
      }

      // 3. Education Match (Weight: 20)
      if (profile.edu === job.edu) {
        score += 20;
      }

      // 4. Location Match (Weight: 20)
      const userLoc = profile.loc.toLowerCase();
      const jobLoc = job.loc.toLowerCase();
      if (userLoc && (userLoc === jobLoc || job.mode === "Online")) {
        score += 20;
      } else if (!userLoc && job.mode === "Online") {
        score += 20;
      }

      return { ...job, finalScore: Math.round(score) };
    });

    setMatches(calculatedMatches.sort((a, b) => b.finalScore - a.finalScore));
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Sidebar 
            profile={profile} 
            setProfile={setProfile} 
            onSearch={handleFindMatches} 
          />
        </div>

        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center justify-between border-b border-blue-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-800">
              {hasSearched ? `Recommendations for ${profile.name}` : 'Available Internships'}
            </h2>
            <span className="text-sm text-slate-500 font-medium">
              {matches.length > 0 ? `${matches.length} Results Found` : ''}
            </span>
          </div>

          <div className="space-y-6">
            {hasSearched ? (
              matches.length > 0 ? (
                matches.map(job => (
                  <InternshipCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-slate-500 text-lg">No matches found. Try broadening your skills or preferences.</p>
                </div>
              )
            ) : (
              INITIAL_INTERNSHIPS.map(job => (
                <InternshipCard key={job.id} job={{...job, finalScore: 0}} />
              ))
            )}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-auto">
        &copy; {new Date().getFullYear()} Intern Spark. Empowering the next generation of PMs and Developers.
      </footer>
    </div>
  );
};

export default App;
