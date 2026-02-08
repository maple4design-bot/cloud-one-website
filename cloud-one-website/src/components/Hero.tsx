import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full hero-gradient -z-10 pointer-events-none"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    <span className="block text-white">Elevate Your Business with</span>
                    <span className="text-gradient">Cloud One Technologies</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                    Dubai's premier agency for Web Design, Development, App Creation, and Branding.
                    We transform ideas into digital masterpieces.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/packages"
                        className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                        View Packages
                    </Link>
                    <Link href="/portfolio" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition">
                        See Our Work <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
