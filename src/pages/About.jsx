export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-[#202124] text-white">
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-15">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            About AUSY Exports
                        </h1>
                        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                            Connecting local craftsmanship with global markets since 2010
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                            <p className="text-gray-400 mb-6">
                                Founded in 2010, AUSY Exports began with a simple mission: to bring high-quality clothing from local suppliers to international markets.
                                What started as a small operation with just 5 suppliers has now grown into a network of over 60 trusted partners.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Our two branches, managed by dedicated teams, work tirelessly to ensure that every garment meets our strict quality standards before
                                reaching customers worldwide.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Our team"
                                className="rounded-lg shadow-xl w-full h-auto border-2 border-[#4285F4]"
                            />
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#2D2E30] p-6 rounded-lg border-l-4 border-[#4285F4]">
                                <div className="text-[#4285F4] mb-4">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
                                <p className="text-gray-400">
                                    Every garment undergoes rigorous quality checks before export.
                                </p>
                            </div>
                            <div className="bg-[#2D2E30] p-6 rounded-lg border-l-4 border-[#34A853]">
                                <div className="text-[#34A853] mb-4">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2">Supplier Relationships</h3>
                                <p className="text-gray-400">
                                    We maintain long-term partnerships with our 60+ local suppliers.
                                </p>
                            </div>
                            <div className="bg-[#2D2E30] p-6 rounded-lg border-l-4 border-[#EA4335]">
                                <div className="text-[#EA4335] mb-4">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2">Global Reach</h3>
                                <p className="text-gray-400">
                                    Exporting to 15+ countries with efficient logistics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}