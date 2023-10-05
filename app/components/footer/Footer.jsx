import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-[#33353F]  bg-[#121212] w-full flex items-center justify-center px-4  lg:h-[80px] md:h-[64px] h-[56px]">
      <div className="container   flex justify-between ">
        <span className="text-[#FF5722]">
          {" "}
          A<span className="text-white">DAM</span>.
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
