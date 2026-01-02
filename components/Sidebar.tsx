
import React from 'react';
import { UserProfile } from '../types';

interface SidebarProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onSearch: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ profile, setProfile, onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  return (
    <aside className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 sticky top-28">
      <div className="flex items-center gap-2 mb-6 border-l-4 border-amber-500 pl-4">
        <h2 className="text-xl font-bold text-blue-900">Student Profile</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="userName" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="John Doe" 
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="edu" className="block text-sm font-semibold text-slate-700 mb-1">Education</label>
            <select 
              id="edu" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
              value={profile.edu}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="12th">12th Pass</option>
              <option value="Diploma">Diploma</option>
              <option value="Under Graduate">Under Graduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
          <div>
            <label htmlFor="mode" className="block text-sm font-semibold text-slate-700 mb-1">Work Mode</label>
            <select 
              id="mode" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
              value={profile.mode}
              onChange={handleChange}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="loc" className="block text-sm font-semibold text-slate-700 mb-1">Preferred City</label>
          <input 
            type="text" 
            id="loc" 
            placeholder="e.g., Delhi" 
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            value={profile.loc}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-semibold text-slate-700 mb-1">Career Goal</label>
          <input 
            type="text" 
            id="goal" 
            placeholder="e.g., Web Developer" 
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            value={profile.goal}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-semibold text-slate-700 mb-1">Skills</label>
          <textarea 
            id="skills" 
            placeholder="Python, Java, React..." 
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all h-28 resize-none"
            value={profile.skills}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          onClick={onSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
        >
          Find Best Matches
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
