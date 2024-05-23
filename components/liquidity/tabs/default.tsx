"use client";
import { Button as ShadCNButton } from "@/components/ui/button";
import infoIcon from "@/public/icons/info-icon.svg";
import noLiauidityIcon from "@/public/icons/no-liquidity-icon.svg";
import arrowDown from "@/public/icons/arrow-down.svg";
import Image from "next/image";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CircleHelp, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Tooltip } from "@nextui-org/react";
import { poppins } from "@/utils/fonts";
const DefaultTab = ({ setActiveTab, tabs }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="relative flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-4xl font-light text-[#F4BC00] sm:text-5xl">
          Your Liquidity
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => setActiveTab(tabs[1])}
            className="size-fit rounded-xl bg-[#222531] p-4 font-semibold text-[#F4BC00] hover:bg-[#2e3242]"
          >
            Create a Pair
          </Button>
          {/* <CreateAPair /> */}
          <Button className="size-fit rounded-xl bg-[#F4BC00] p-4 font-semibold text-black transition hover:bg-[#f4bb00e7]">
            Add Liquidity
          </Button>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-sm leading-6 sm:justify-start">
        <div className="text-white">Liquidity provider rewards</div>
        <Tooltip
          showArrow={true}
          content={
            <div className={cn("p-3", poppins.className)}>
              <div className="font-semibold">Liquidity provider rewards</div>
              <div className="mt-8">
                Liquidity providers earn a 0.3% fee on all trades proportional
                to their share of the pool. Fees are added to the pool, accrue
                in real time and can be claimed by withdrawing your liquidity.
              </div>
            </div>
          }
          placement="right"
          closeDelay={1000}
          className={cn(" w-[28%] rounded-[8px] bg-[#2A2D3C] text-white")}
        >
          <Info color="white" size={16} />
        </Tooltip>
      </div>
      <div className="mt-4 text-sm font-semibold text-white">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[8px] border border-[#222531] px-2 py-4 focus:outline-none">
            <div className="flex items-center">
              Account analytics and accrued fees
              <Image src={arrowDown} alt="down arrow icon" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 rounded-xl bg-[#2A2D3C] px-2 py-4 text-sm font-semibold text-white">
            <DropdownMenuItem>
              Account analytics and accrued fees
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* no liquidity found */}
      {/* <div className="mt-[72px] flex flex-col items-center justify-center gap-3">
        <Image src={noLiauidityIcon} alt="no-liquidity-icon" />
        <div className="text-sm text-[#ABAFC4]">No liquidity found.</div>
      </div> */}
      <div
        className={cn(
          "mt-6 overflow-hidden rounded-[8px] border border-[#222531] px-2 py-4 transition-all sm:px-8",
          open ? "h-[360px]" : "h-[70px]",
        )}
      >
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <div className="mr-2 size-8 rounded-full bg-[#44485F]"></div>
            <div className="mr-2 size-8 rounded-full bg-[#44485F] sm:mr-8"></div>
            <div className="font-semibold text-white">TRT/MPL</div>
          </div>
          <div
            className="flex cursor-pointer items-center gap-2 text-[#FEBF32]"
            onClick={() => setOpen(!open)}
          >
            Manage
            <ChevronDown
              color="#FEBF32"
              size={24}
              className={cn("transition", open && "rotate-180")}
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 text-xs text-[#ABAFC4] sm:text-sm">
          <div className="flex w-full items-center justify-between">
            <div>Your total pool tokens</div>
            <div>0.0000000004302</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>Pooled TRT</div>
            <div>0.000000230791</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>Pooled MPL</div>
            <div>0.000226482</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>Your pool share</div>
            <div>0.01%</div>
          </div>
        </div>
        <div className="mt-10 cursor-pointer text-center text-sm font-semibold text-[#F4BC00] hover:underline">
          View Accrued Fees and Analytics
        </div>
        <div className="mt-4 flex w-full gap-2">
          <Button
            onClick={() => setActiveTab(tabs[2])}
            className="h-fit w-full bg-[#222531] p-4 text-[#F4BC00]"
          >
            Remove
          </Button>
          <Button className="h-fit w-full bg-[#222531] p-4 text-[#F4BC00]">
            Add
          </Button>
        </div>
      </div>
      <div className="mt-16 text-center text-sm text-white">
        Don&apos;t see a pool you joined?
        <span className="ml-1 cursor-pointer text-[#2C2D3A] underline">
          Import it
        </span>
      </div>
    </div>
  );
};

export default DefaultTab;
