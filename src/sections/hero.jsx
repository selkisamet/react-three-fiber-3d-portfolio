import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col min-h-screen w-full relative">
            <div className="flex flex-col w-full mx-auto sm:mt-20 mt-20 c-space gap-3">
                <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">Hi, I am Samet SELKİ <span className="waving-hand">🖐</span></p>
                <p className="hero_tag text-gray_gradient">Building Product & Brands</p>
            </div>

            <div className="h-full w-full absolute inset-0">
            </div>
        </section>
    )
}

export default Hero;