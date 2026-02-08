import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 py-12 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Cloud One Technologies</h3>
                    <p className="mb-4">
                        Creating digital experiences that matter. Dubai-based web design and development agency.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link></li>
                        <li><Link href="/packages" className="hover:text-blue-400 transition">Packages</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                    <p>Dubai, UAE</p>
                    <p>Email: info@cloudone.ae</p>
                    <p>Phone: +971 50 123 4567</p>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                &copy; {new Date().getFullYear()} Cloud One Technologies. All rights reserved.
            </div>
        </footer>
    );
}
