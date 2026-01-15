import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const ConnectCard = () => {
    const { personalInfo } = portfolioData;

    const socialLinks = [
        { icon: Github, href: personalInfo.github, label: "GitHub", color: "hover:text-white" },
        { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-red-400" }
    ];

    return (
        <BentoItem className="flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                Connect <div className="h-1 w-1 rounded-full bg-zinc-500"></div>
            </h3>

            <div className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between group p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all ${link.color}`}
                    >
                        <div className="flex items-center gap-3">
                            <link.icon size={20} />
                            <span className="font-medium text-sm text-zinc-300 group-hover:text-white">{link.label}</span>
                        </div>
                        <ArrowUpRight size={16} className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                ))}
            </div>
        </BentoItem>
    );
};

export default ConnectCard;
