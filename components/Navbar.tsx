"use client";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { aleo, poppins } from "@/utils/fonts";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const links = [
    { translation: t("navbar.swap"), link: "" },
    { translation: t("navbar.liquidity"), link: "" },
  ];

  return (
    <nav className={`${aleo.className} ml-4 mt-4 lg:ml-14`}>
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <div>
          <span className="mr-1 text-base font-bold text-white">Trust</span>
          <span className="bg-text-linear-gradient bg-clip-text text-base font-bold text-transparent">
            AI
          </span>
        </div>
        <div className={`${poppins.className} ml-24`}>
          {links.map((link, i) => (
            <span
              className={`bg-clip-text text-transparent ${
                i === 0 ? "mr-12 bg-text-linear-gradient" : "text-white"
              } text-sm font-bold`}
              key={link.link}
            >
              {link.translation}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
