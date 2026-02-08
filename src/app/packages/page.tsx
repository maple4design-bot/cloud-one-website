import PricingCard from '@/components/PricingCard';

export default function Packages() {
    const packages = [
        {
            title: 'Starter',
            price: '$999',
            features: [
                'Responsive Website (5 Pages)',
                'Basic SEO Setup',
                'Contact Form',
                'Mobile Friendly',
                '1 Month Support',
            ],
            isPopular: false,
        },
        {
            title: 'Professional',
            price: '$1,999',
            features: [
                'Custom Design (10 Pages)',
                'Advanced SEO',
                'CMS Integration',
                'Speed Optimization',
                'Social Media Integration',
                '3 Months Support',
            ],
            isPopular: true,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            features: [
                'E-commerce Functionality',
                'Custom Web Application',
                'Database Integration',
                'User Authentication',
                'API Development',
                'Priority Support',
            ],
            isPopular: false,
        },
    ];

    return (
        <div className="min-h-screen py-24 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Packages</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Transparent pricing for businesses of all sizes. Choose the plan that fits your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <PricingCard
                            key={index}
                            title={pkg.title}
                            price={pkg.price}
                            features={pkg.features}
                            isPopular={pkg.isPopular}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
