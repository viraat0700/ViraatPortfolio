import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

const ProjectsCard = () => {
    const { projects } = portfolioData;

    return (
        <BentoItem span="md:col-span-2 md:row-span-1" className="bg-zinc-900">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FolderGit2 size={20} className="text-emerald-500" /> Featured Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => {
                    const CardContent = () => (
                        <>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                                {project.link && (
                                    <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-emerald-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                )}
                            </div>

                            <p className="text-xs text-zinc-500 font-mono mb-3">{project.tech}</p>

                            <p className="text-sm text-zinc-400 line-clamp-3">
                                {project.description[0]}
                            </p>
                        </>
                    );

                    return project.link ? (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all block h-full"
                        >
                            <CardContent />
                        </a>
                    ) : (
                        <div key={index} className="group relative bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all h-full">
                            <CardContent />
                        </div>
                    );
                })}
            </div>
        </BentoItem>
    );
};

export default ProjectsCard;
