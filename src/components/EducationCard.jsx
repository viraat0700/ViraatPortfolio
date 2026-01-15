import React from 'react';
import BentoItem from './BentoItem';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const EducationCard = () => {
    const { education } = portfolioData;

    return (
        <BentoItem span="md:col-span-2" className="bg-zinc-900">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-emerald-500" /> Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                    <div key={index} className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-800/20 border border-zinc-800/50">
                        <h4 className="font-bold text-zinc-100">{edu.degree}</h4>
                        <div className="text-zinc-400 text-sm">{edu.institution}</div>
                        <div className="text-zinc-500 text-xs font-mono mt-1">{edu.year}</div>
                    </div>
                ))}
            </div>
        </BentoItem>
    );
};

export default EducationCard;
