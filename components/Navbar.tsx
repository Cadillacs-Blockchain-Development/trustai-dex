"use client";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { aleo, poppins } from "@/utils/fonts";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import TrustCoin from "@/public/trustAICoin.svg";
import { ConnectWallet } from "@thirdweb-dev/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const links = [
    { translation: t("navbar.swap"), link: "/" },
    { translation: t("navbar.liquidity"), link: "/liquidity" },
  ];

  return (
    <nav
      className={`${aleo.className} container relative z-50 mx-auto ml-4 mt-4 bg-transparent lg:ml-14`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" />
          <div>
            <span className="mr-1 text-base font-bold text-white">Trust</span>
            <span className="bg-text-linear-gradient bg-clip-text text-base font-bold text-transparent">
              AI
            </span>
          </div>
          <div className={`${poppins.className} ml-24 flex gap-12`}>
            {links.map((link, i) => (
              <Link
                className={cn(
                  "bg-clip-text text-sm font-bold text-transparent",
                  pathname === link.link
                    ? "mr-12 bg-text-linear-gradient"
                    : "text-white",
                )}
                key={link.link}
                href={link.link}
              >
                {link.translation}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`hidden items-center justify-between gap-6 sm:flex ${poppins.className}`}
        >
          <div className="flex items-center gap-3">
            <Image src={TrustCoin} alt="Trust Coin" />
            <span className={`${aleo.className} text-sm text-white `}>
              $0.91
            </span>
          </div>
          <div className="flex  items-center gap-1 rounded-full bg-[#2C2D3A] pl-4">
            <div className="size-2 rounded-full bg-[#DAA200]"></div>
            <span className="mr-1 text-xs text-white lg:mr-4 lg:text-sm">
              TRT
            </span>
            <div>
              <ConnectWallet
                btnTitle={t("navbar.connect_wallet_title")}
                style={{
                  borderRadius: "9999px",
                  color: "black",
                  fontWeight: "600",
                  height: "fit-content",
                  padding: "8px 16px",
                  background:
                    "linear-gradient(90deg, #DAA200 0%, #FFD600 100%)",
                }}
                modalSize="compact"
              />
            </div>
          </div>
          <div className="hidden size-10 items-center justify-center rounded-xl bg-[#3B3C4E] lg:flex">
            <div className="size-[18px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
