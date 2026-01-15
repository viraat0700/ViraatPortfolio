import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';

const SkillsCard = () => {
    const { skills } = portfolioData;

    // Flatten skills for display or group them
    const allSkills = [
        ...skills.languages,
        ...skills.frameworks,
        ...skills.devOps
    ];

    return (
        <BentoItem span="md:col-span-1" className="bg-zinc-900">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="mt-6">
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-3">Tools</p>
                <div className="flex flex-wrap gap-2">
                    {skills.additional.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-[10px] font-medium rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/30"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default SkillsCard;
