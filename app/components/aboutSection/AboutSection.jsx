import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="text-white  grid md:grid md:grid-cols-2 gap-8 items-center  xl:gap-40  pt-24 px-4  xl:px-16 justify-center "
      id="about"
    >
      <Image
        alt="profile pic"
        src="/assets/images/adam1.jpg"
        width={500}
        height={500}
        className="place-self-center col-span-1  lg:order-last md:order-last "
      />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full  col-span-1">
        <h2 className=" text-4xl font-bold text-white mt-10 mb-8 md:mb-8">
          About Me
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
          Passionate software developer with one year of hands-on experience,
          specializing in web development. Committed to creating innovative and
          user-friendly solutions, I thrive on turning ideas into elegant,
          functional websites.Let s collaborate and turn your web project into a
          reality.
        </p>
        <div>
          <h3 className="text-xl mt-5 font-semibold">PERSONAL INFOS:</h3>
          <ul className="grid grid-cols-1  gap-y-5 gap-x-10 mt-5  sm:text-sm text-[#ADB7BE]">
            <li className="col-span-1">Name: Adam</li>
            <li className="col-span-1">Surname: El Omar</li>
            <li className="col-span-1">Phone: +905385005071</li>
            <li className="col-span-1">Nationality: Lebanese</li>
            <li className="col-span-1">Languages: Arabic, English</li>
            <li className="col-span-1">Email: adam.elomar.98@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
