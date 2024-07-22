'use client'
import PricingPlan from '@/app/_data/PricingPlan'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

function Upgrade() {
    const { user } = useUser();
    const router = useRouter();

    if (!user) {
        return <div className='text-center text-gray-500'>Loading user information...</div>;
    }

    const handleGetStarted = (link) => {
        if (link) {
            window.open(link + '?prefilled_email=' + user?.primaryEmailAddress.emailAddress, '_blank');
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className='bg-gray-100 py-16'>
            <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                    Choose Your Perfect Plan
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PricingPlan.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-gray-300 bg-white p-8 shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-50 opacity-10"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {item.name}
                                </h3>
                                <p className="text-lg font-bold text-gray-800 mb-4">
                                    <span className="text-4xl">{item.price}$</span>
                                    <span className="text-sm font-medium text-gray-600">/{item.name}</span>
                                </p>
                                <ul className="space-y-2 text-left text-gray-700 mb-6">
                                    {item.offering.map((offer, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${offer.value.includes('✔') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                                {offer.value.includes('✔') ? '✔' : '❌'}
                                            </span>
                                            <span>{offer.value.replace(/✔|❌/g, '').trim()}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handleGetStarted(item.link)}
                                    className="mt-4 w-full rounded-full bg-blue-500 px-6 py-3 text-white text-sm font-medium transition-transform transform hover:bg-blue-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Upgrade
