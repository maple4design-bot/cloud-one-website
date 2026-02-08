import Link from 'next/link';
import React from 'react';

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
    return (
        <div className={`relative glass-card p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${isPopular ? 'border-blue-500/50 shadow-blue-500/20 shadow-lg' : ''}`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <div className="mb-6">
                <span className="text-4xl font-bold text-white">{price}</span>
                {price !== 'Custom' && <span className="text-gray-400">/project</span>}
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
            >
                Choose Plan
            </Link>
        </div>
    );
}
