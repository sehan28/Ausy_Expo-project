import React from 'react';

const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1500" },
    { name: "James Smith", email: "james.smith@email.com", amount: "$2000" },
    { name: "Sophia Brown", email: "sophia.brown@email.com", amount: "$4000" },
    { name: "Noah Wilson", email: "noah.wilson@email.com", amount: "$1200" },
];

const RecentSales = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow w-full md:w-80">
            <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
            <ul className="space-y-4">
                {recentSales.map((sale, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">{sale.name}</p>
                            <p className="text-sm text-gray-500">{sale.email}</p>
                        </div>
                        <p className="text-right font-semibold">{sale.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSales;
