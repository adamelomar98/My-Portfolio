import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-xl rounded mdC:p-0 hover:text-white"
      // onClick={setNavbarOpen(false)}
    >
      {title}
    </Link>
  );
};

export default NavLink;
