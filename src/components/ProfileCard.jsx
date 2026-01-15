import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

const ProfileCard = () => {
    const { personalInfo } = portfolioData;

    return (
        <BentoItem span="md:col-span-2 md:row-span-2" className="flex flex-col justify-between min-h-[300px]">
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Available for work
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                    {personalInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-6">
                    {personalInfo.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed max-w-xl">
                    {personalInfo.bio}
                </p>
            </div>

            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute right-4 top-4 text-zinc-800">
                <Sparkles size={120} strokeWidth={0.5} />
            </div>
        </BentoItem>
    );
};

export default ProfileCard;
