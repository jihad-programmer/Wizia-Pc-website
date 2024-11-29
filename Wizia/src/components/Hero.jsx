import React from "react";

const Hero = () => {
    return (
        <section
            className="relative bg-secondary text-white h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url('/path-to-your-hero-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="text-5xl font-bold text-center">
                More leads, less people.
            </h1>
            <p className="mt-4 text-lg text-center max-w-2xl">
                Train an AI on your ICP and messaging matrix. Activate it on a patch list. It will send personalized sequences to every target contact.
            </p>
            <button className="mt-6 px-6 py-3 bg-primary text-secondary font-bold rounded hover:bg-white">
                Sign Up for Beta
            </button>
        </section>
    );
};

export default Hero;
