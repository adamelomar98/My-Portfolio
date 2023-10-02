import React from "react";
import { FaUniversity } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
const brLine = `${(<br />)}`;
const data = [
  {
    id: 1,
    title: " Aydin University (Diploma od Education,Computer Programming)",
    emoji: <FaUniversity className="mr-2 text-xl text-amber-900 " />,
    type: "diploma",
    date: "2020-2023",
    description:
      " Microprocessors And Assembler Programming - Object Oriented Programming - Visual Programming - Database and Software Security - Data Structures",
  },
  {
    id: 2,
    title: "Web Developer",
    emoji: <SiFreelancer className="mr-2 text-xl text-sky-400" />,
    type: "Freelance",
    date: " 2023 - 4 months",
    description: `•Used Next.js 13 App Router for client-side routing.<br/>•Developed full-stack web applications with React, Tailwind, Prisma, MongoDB, and NextAuth.<br/>•Built E-Commerce platforms with integrated Admin Dashboards.<br/>•Employed modern web technologies for creating up-to-date applications.<br/>•Solved complex technical issues while focusing on user experience and navigation.`,
  },
  {
    id: 3,
    title: "Web Developer",
    emoji: <SiFreelancer className="mr-2 text-xl text-sky-400 " />,
    type: "Freelance",
    date: "2022 - 6 months",
    description:
      "•Built user-friendly interfaces with Next.js.<br/>•Styled websites using Tailwind CSS.<br/>•Developed back-end solutions with Node.js.<br/>•Managed data efficiently using MySQL.<br/>•Created complete web solutions from start to finish",
  },
];
const EduExp = () => {
  return (
    <section
      className="grid grid-cols-1 container   pt-24 px-4  xl:px-16 "
      id="education"
    >
      <div className="col-span-1 ">
        <h5 className="text-[#af5e2f]  ">Experience And Education</h5>
        <h2 className="lg:text-4xl sm:text-3xl font-bold text-white mb-4 ">
          Resume of Experience and Education
        </h2>
      </div>
      <div className="col-span-1">
        <ul className="list-disc">
          {data.map((data, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 sm:grid-cols-2 mt-5 "
            >
              <li className="col-span-2 flex ">
                {data.emoji}
                {data.title}{" "}
                <span className=" text-[#dd984a] ml-auto  text-xs text-opacity-60 underline">
                  {data.date}
                </span>
              </li>

              <p
                className="col-span-2 text-[#7a8187] text-sm mt-2 leading-8"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EduExp;
