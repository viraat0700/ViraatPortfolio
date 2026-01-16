import React from 'react';
import BentoGrid from './components/BentoGrid';
import ProfileCard from './components/ProfileCard';
import ConnectCard from './components/ConnectCard';
import SkillsCard from './components/SkillsCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectsCard from './components/ProjectsCard';
import EducationCard from './components/EducationCard';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 selection:text-emerald-500 pb-20 pt-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">

      {/* Background decoration */}
      <div className="fixed inset-0 cursor-default pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950"></div>

      <BentoGrid>
        <ProfileCard />
        <ConnectCard />
        <SkillsCard />
        <ExperienceCard />
        <ProjectsCard />
        <EducationCard />
      </BentoGrid>

      <footer className="text-center mt-20 text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Viraat Shrivastava. Built with React, Tailwind & Bento.</p>
      </footer>
    </div>
  );
}

export default App;
