import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <div className="text-blue-400 group-hover:text-blue-300">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
