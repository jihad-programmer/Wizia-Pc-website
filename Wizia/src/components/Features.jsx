import React from "react";

const features = [
    {
        title: "You're in Control",
        description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        icon: "control-icon.png", // Replace with actual icons
    },
    {
        title: "Infinitely Scalable",
        description: "Scale effortlessly with results you can trust.",
        icon: "scalable-icon.png",
    },
    {
        title: "Incredibly Flexible",
        description: "Reach out to your long-tail of customers at renewal time.",
        icon: "flexible-icon.png",
    },
];

const Features = () => {
    return (
        <section className="bg-secondary text-white py-16">
            <div className="container mx-auto text-center">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={feature.icon} alt={`${feature.title} icon`} className="h-16 mb-4" />
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
