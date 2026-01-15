import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const ExperienceCard = () => {
    const { experience } = portfolioData;

    return (
        <BentoItem span="md:col-span-1 md:row-span-2" className="overflow-y-auto custom-scrollbar">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 sticky top-0 bg-zinc-900/95 backdrop-blur py-2 z-10 border-b border-zinc-800">
                <Briefcase size={20} className="text-emerald-500" /> Experience
            </h3>

            <div className="space-y-8">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-6 border-l border-zinc-800">
                        <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>

                        <div className="mb-1 text-sm text-emerald-500 font-mono">{job.duration}</div>
                        <h4 className="text-lg font-bold text-zinc-100">{job.role}</h4>
                        <div className="text-zinc-400 text-sm mb-3 font-medium">{job.company}</div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-500 text-sm marker:text-zinc-600">
                            {job.description.slice(0, 3).map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                            {job.description.length > 3 && (
                                <li className="list-none italic text-xs pt-1">...and {job.description.length - 3} more points</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </BentoItem>
    );
};

export default ExperienceCard;
