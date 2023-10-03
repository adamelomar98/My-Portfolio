"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const HomeHero = () => {
  return (
    <section className=" flex  justify-center  pt-24 px-4  xl:px-16" id="home">
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
        <div className=" place-self-center rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
          <Image
            src="/assets/images/adam2.jpg"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400}
            height={400}
          />
        </div>
        <div className=" sm:mt-5  mt-5  text-center md:text-left ">
          <h1 className="text-[#FF5722] mb-8 text-4xl sm:text-4xl lg:text-6xl  lg:leading-normal font-extrabold   ">
            Hello, I&apos;m <br />
            <span className="text-white">
              {" "}
              <TypeAnimation
                sequence={[
                  "Adam",
                  1000,
                  "Web Developer",
                  1000,
                  // "Mobile Developer",
                  // 1000,
                  // "UI/UX Designer",
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl ">
            I am a fullstack web developer with a passion for creating
            interactive and responsive web applications.
          </p>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl ">
            Passionate software developer with one year of hands-on experience,
            specializing in web development. Committed to creating innovative
            and user-friendly solutions, I thrive on turning ideas into elegant,
            functional websites.Let s collaborate and turn your web project into
            a reality.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
