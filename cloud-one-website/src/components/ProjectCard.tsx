import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    link: string;
}

export default function ProjectCard({ title, category, image, link }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        href={link}
                        className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                        View Project
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">{category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">{title}</h3>
            </div>
        </div>
    );
}
