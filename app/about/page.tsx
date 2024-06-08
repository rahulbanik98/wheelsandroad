"use client";

import Image from "next/image";
import { CustomButton } from "@/components";
import Link from "next/link";

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    About Page Find, book, rent a car—quick and super easy!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <Link href="/">
                    <CustomButton
                        title="Explore Cars"
                        containerStyles="bg-primary-blue text-white rounded-full mt-10"
                        handleClick={handleScroll}
                    />
                </Link>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
                <div className="absolute xl:-top-1 xl:-right-1/3 -right-1/3 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
            </div>
        </div>
    );
};

export default Hero;