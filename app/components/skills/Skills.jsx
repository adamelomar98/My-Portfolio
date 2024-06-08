import React from "react";
const skills = [
  {
    title: "HTML",
    path: "",
  },
  {
    title: "CSS",
    path: "",
  },
  {
    title: "JavaScript",
    path: "",
  },
  {
    title: "Tailwind",
    path: "",
  },
  {
    title: "TypeScript",
    path: "",
  },
  {
    title: "React.js",
    path: "",
  },
  {
    title: "Next.js",
    path: "",
  },
  // {
  //   title: "Figma",
  //   path: "",
  // },
  {
    title: "TeamWork",
    path: "",
  },
  {
    title: "Problem-Solving",
    path: "",
  },
  {
    title: "Communication",
    path: "",
  },
  // {
  //   title: "Agile",
  //   path: "",
  // },
  // {
  //   title: "Scram",
  //   path: "",
  // },
  {
    title: "Git",
    path: "",
  },
  {
    title: "Github",
    path: "",
  },
  {
    title: "MongoDB",
    path: "",
  },
  {
    title: "MySQL",
    path: "",
  },
];
const Skills = () => {
  return (
    <section className=" pt-24 px-4 0 xl:px-16" id="skills">
      <div className=" ">
        <h1 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12 ">
          My Skills
        </h1>
        <ul className="flex flex-wrap mx-auto  lg:px-10 sm:px-2 justify-center ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`   inline-block 
            py-3 px-5 rounded-full  bg-gradient-to-br from-primary-500
             to-secondary-500 bg-[#FF5722] text-white font-bold text-center  m-4   `}
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

{
  /* <section className=''>
        <div  className='mt-20 '>
            <h1 className='text-3xl text-center mt-40 mb-20'>My Skills</h1>
            <ul className='grid xl:grid-cols-6 sm:grid-cols-3 mx-auto gap-5 px-10'>
                 {skills.map((skill,index)=>
             <li key={index} className={` col-span-1 place-self-center  inline-block 
            py-3 px-5 rounded-full  bg-gradient-to-br from-primary-500
             to-secondary-500 bg-slate-200  text-black font-bold text-center  my-5  `} >{skill.title}</li>

                )}
            
              
            
            </ul>
        </div>
    </section> */
}
