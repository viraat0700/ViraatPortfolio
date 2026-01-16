import React, { useState } from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Maximize2 } from 'lucide-react';
import Modal from './Modal';

const ExperienceCard = () => {
    const { experience } = portfolioData;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <BentoItem
                span="md:col-span-1 md:row-span-2"
                className="overflow-y-auto custom-scrollbar cursor-pointer relative group"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 bg-zinc-800/80 p-1.5 rounded-lg border border-zinc-700/50 backdrop-blur-sm z-20">
                    <Maximize2 size={16} />
                </div>

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
                                    <li className="list-none italic text-xs pt-1">...and {job.description.length - 3} more points. Click to view all.</li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </BentoItem>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Work Experience">
                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <div key={index} className="relative pl-6 border-l border-zinc-700">
                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-500"></div>

                            <div className="mb-2 text-sm text-emerald-400 font-mono">{job.duration}</div>
                            <h4 className="text-xl font-bold text-white">{job.role}</h4>
                            <div className="text-zinc-300 font-medium mb-4 text-lg">{job.company}</div>

                            <ul className="list-disc list-outside ml-4 space-y-3 text-zinc-300 leading-relaxed marker:text-emerald-500/50">
                                {job.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default ExperienceCard;
