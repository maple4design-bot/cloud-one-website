import ProjectCard from '@/components/ProjectCard';
import { portfolio } from '@/data/portfolio';

export default function Portfolio() {
    return (
        <div className="min-h-screen py-24 relative">
            <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Check out some of our recent work. We take pride in delivering high-quality,
                        impactful digital solutions for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
