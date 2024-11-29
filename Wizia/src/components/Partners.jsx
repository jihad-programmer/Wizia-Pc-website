import React from "react";

const Partners = () => {
    const logos = ["logo1.png", "logo2.png", "logo3.png", "logo4.png"]; // Replace with actual paths
    return (
        <section className="bg-secondary py-12 text-center">
            <h2 className="text-2xl font-bold text-white">Our Trusted Partners</h2>
            <div className="flex justify-center gap-6 mt-6 flex-wrap">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="Partner Logo" className="h-12" />
                ))}
            </div>
        </section>
    );
};

export default Partners;
