"use client";
import { aleo, poppins, rubik } from "@/utils/fonts";
import Image from "next/image";
import TrustCoin from "@/public/trustAICoin.svg";
import Usdt from "@/public/Usdt.svg";
import exchange from "@/public/icons/exchange-swap.svg";
import arrowDown from "@/public/icons/arrow-down.svg";
import arrowDownOutline from "@/public/icons/arrow-down-outline.svg";
import questionMark from "@/public/icons/question-mark.svg";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { Settings } from "lucide-react";
import TransacitonSettings from "./ui/modals/swap/TransacitonSettings";
import SelectAToken from "./ui/modals/swap/SelectAToken";
import ConfirmSwap from "./ui/modals/swap/ConfirmSwap";

const Conversion = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`${poppins.className} right-0 top-0 min-h-dvh overflow-hidden rounded-xl bg-[#23242F] px-4 pt-3 lg:absolute lg:w-[34%] lg:rounded-none lg:px-9`}
    >
      <div className="mt-[76px] rounded-3xl bg-[#2C2D3A] p-6">
        <div className="flex flex-col gap-6">
          <div className="text-center text-[25px] font-bold text-white">
            <div className="flex w-full items-center justify-between">
              <div className="basis-[60%]"></div>
              <div className="flex w-full items-center justify-between">
                {t("conversion.heading")}
                <div className="cursor-pointer">
                  <TransacitonSettings />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-[#8B8CA7]">
              <span> {t("conversion.pay")}</span>
              <span className="underline"> {t("conversion.available_1")}</span>
            </div>
            <div className="mt-2 flex cursor-pointer justify-between rounded-2xl border border-[#3B3C4E] p-4">
              <SelectAToken
                trigger={
                  <div className="flex items-center gap-3">
                    <Image src={Usdt} alt="Usdt" />
                    <span className="text-sm font-semibold text-white">
                      USDT
                    </span>
                    <Image src={arrowDown} alt="down arrow icon" />
                  </div>
                }
              />
              <span
                className={cn(
                  "text-lg font-bold text-[#8B8CA7]",
                  rubik.className,
                )}
              >
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent px-2 text-right text-lg font-bold text-white focus:outline-none lg:w-fit"
                />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={arrowDownOutline} alt="down arrow icon" />
          </div>
          <div>
            <div className="flex justify-between text-sm text-[#8B8CA7]">
              <span> {t("conversion.recieve")}</span>
              <span className=""> {t("conversion.available_2")}</span>
            </div>
            <div className="mt-2 flex cursor-pointer justify-between rounded-2xl border border-[#3B3C4E] p-4">
              <SelectAToken
                trigger={
                  <div className="flex items-center gap-3">
                    <Image src={TrustCoin} alt="TrustCoin" />
                    <span className="text-sm font-semibold text-white">
                      TRT
                    </span>
                    <Image src={arrowDown} alt="down arrow icon" />
                  </div>
                }
              />
              <span
                className={cn(
                  "text-lg font-bold text-[#8B8CA7]",
                  rubik.className,
                )}
              >
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent px-2 text-right text-lg font-bold text-white focus:outline-none lg:w-fit"
                />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center text-sm text-[#8B8CA7]">
            <div className="mr-2 text-center">1 BUSD = 1.0005 USDC</div>
            <Image src={exchange} alt="exchange" />
          </div>
          <div>
            <ConfirmSwap />
            <div className="mt-2 flex items-center justify-center text-sm text-[#8B8CA7]">
              {t("conversion.confirm_btn_desc")}
            </div>
          </div>
          <hr className="border border-[#3B3C4E]" />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#8B8CA7]">
                {" "}
                {t("conversion.trade_minting")}
              </span>
              <Image src={questionMark} alt="question Mark" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">
                {" "}
                {t("conversion.max_reward")} 5.04 DEX
              </span>
              <span className="text-sm text-[#53F3C3]">$16.68</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
