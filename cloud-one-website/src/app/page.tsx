import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -z-10 blur-3xl"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to help your business grow and succeed in the modern era.
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

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block border border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and let us help you build your digital presence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
