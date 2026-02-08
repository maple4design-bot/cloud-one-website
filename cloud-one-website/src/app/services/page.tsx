import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We offer a wide range of digital services to help you achieve your business goals.
                        From design to development, we have you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
