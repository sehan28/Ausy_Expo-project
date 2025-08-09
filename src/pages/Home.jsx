import React from 'react';

export default function Home() {
    return (
        <div className="bg-[#202124] min-h-screen text-white">

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="md:flex md:items-center md:gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            <span className="text-[#4285F4]">Premium</span> Clothing Export Solutions
                        </h1>
                        <p className="mt-4 text-lg text-gray-300">
                            Connecting 60+ local suppliers with global markets through our specialized material categorization and efficient distribution network.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href="#" className="px-6 py-3 bg-[#4285F4] text-white font-medium rounded-md hover:bg-[#3367D6] transition-colors text-center">
                                Explore Collections
                            </a>
                            <a href="#" className="px-6 py-3 border border-gray-600 text-white font-medium rounded-md hover:bg-gray-800 transition-colors text-center">
                                Supplier Portal
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            className="rounded-lg shadow-xl w-full h-auto border-2 border-[#4285F4]"
                            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Clothing export warehouse"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#2D2E30] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-[#4285F4] tracking-wide uppercase">Our Process</h2>
                        <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                            <span className="text-[#4285F4]">Efficient</span> Export System
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                            From local suppliers to international markets
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="bg-[#202124] p-6 rounded-lg shadow-lg border-l-4 border-[#4285F4]">
                            <div className="flex items-center">
                                <div className="bg-[#4285F4] bg-opacity-10 p-3 rounded-full">
                                    <svg className="h-6 w-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h4 className="ml-4 text-lg font-medium">Supplier Network</h4>
                            </div>
                            <p className="mt-4 text-gray-400">
                                Working with 60+ local suppliers to source quality clothing materials.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#202124] p-6 rounded-lg shadow-lg border-l-4 border-[#34A853]">
                            <div className="flex items-center">
                                <div className="bg-[#34A853] bg-opacity-10 p-3 rounded-full">
                                    <svg className="h-6 w-6 text-[#34A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h4 className="ml-4 text-lg font-medium">Material Categorization</h4>
                            </div>
                            <p className="mt-4 text-gray-400">
                                Advanced system for categorizing clothes by material type and quality.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#202124] p-6 rounded-lg shadow-lg border-l-4 border-[#EA4335]">
                            <div className="flex items-center">
                                <div className="bg-[#EA4335] bg-opacity-10 p-3 rounded-full">
                                    <svg className="h-6 w-6 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h4 className="ml-4 text-lg font-medium">Global Distribution</h4>
                            </div>
                            <p className="mt-4 text-gray-400">
                                Efficient logistics network for worldwide clothing distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}