import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { aleo, poppins } from "@/utils/fonts";

const links = [
  { name: "Swap", link: "" },
  { name: "Liquidity", link: "" },
];

const Navbar = () => {
  return (
    <nav className={`${aleo.className} w-[calc(60%-56px)] ml-14 mt-4`}>
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <div>
          <span className="text-base text-white font-bold mr-1">Trust</span>
          <span className="bg-clip-text text-transparent bg-text-linear-gradient font-bold text-base">
            AI
          </span>
        </div>
        <div className={`${poppins.className} ml-24`}>
          {links.map((link, i) => (
            <span
              className={`bg-clip-text text-transparent ${
                i === 0 ? "bg-text-linear-gradient mr-12" : "text-white"
              } font-bold text-sm`}
              key={link.link}
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
