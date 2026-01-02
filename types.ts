
export interface Internship {
  id: number;
  title: string;
  company: string;
  skills: string;
  loc: string;
  mode: 'Online' | 'Offline';
  edu: string;
  goal: string;
  description?: string;
}

export interface UserProfile {
  name: string;
  edu: string;
  loc: string;
  mode: string;
  skills: string;
  goal: string;
  lang: string;
}

export interface MatchResult extends Internship {
  finalScore: number;
}
