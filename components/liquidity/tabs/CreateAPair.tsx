"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TrustCoin from "@/public/trustAICoin.svg";
import arrowDown from "@/public/icons/arrow-down.svg";
import { ChevronLeft, Plus, Settings } from "lucide-react";
import Image from "next/image";
import SelectAToken from "@/components/ui/modals/liquidity/SelectAToken";
import YouWillRecieve from "@/components/ui/modals/liquidity/YouWillRecieve";

const CreateAPair = ({
  setActiveTab,
  tabs,
  secondToken,
  setSecondToken,
}: any) => {
  return (
    <div className="mx-auto -mt-10 sm:w-[54%]">
      <div className="relative flex w-full flex-row items-center justify-between gap-4">
        <div
          className="flex cursor-pointer items-center justify-center rounded-full transition hover:bg-[#2C2D3A] sm:p-2"
          onClick={() => setActiveTab(tabs[0])}
        >
          <ChevronLeft color="white" />
        </div>
        <div className="text-2xl font-light text-[#F4BC00]">
          {secondToken === "" ? "Create a Pair" : "Add Liquidity"}
        </div>
        <Settings color="white" />
      </div>
      {secondToken === "" ? (
        <div className="relative mt-10 w-full rounded-[8px] bg-[#2C2D3A] p-4 text-[#F4BC00]">
          <div className="text-lg font-semibold">
            You are the first liquidity provider
          </div>
          <div className="mt-4 max-w-[70%] text-sm leading-6">
            The ratio of tokens you add will set the price. Once you are ok with
            the rate click supply to review.
          </div>
        </div>
      ) : (
        <div className="relative mt-10 w-full rounded-[8px] bg-[#F4BC0026] p-4 text-xs leading-[18px] text-[#F4BC00]">
          <span className="font-bold">Tip:</span> When you add liquidity, you
          will receive pool tokens representing your position. These tokens
          automatically earn fees proportional to your share of the pool, and
          can be redeemed at any time.
        </div>
      )}
      <div className="relative mt-10 flex w-full justify-between rounded-[8px] border border-[#2A2D3C] p-4">
        <div className="max-w-[46%] sm:max-w-[60%]">
          <div className="text-sm font-semibold text-white">Input</div>
          <input
            type="text"
            placeholder="0.0"
            className="max-w-[70%] bg-transparent text-[34px] text-[#F4BC00]"
          />
          <div className="text-sm  text-white">Balance: 2.9069</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold text-[#F4BC00]">Max</div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-[8px] border border-[#2A2D3C] p-2 focus:outline-none sm:p-4">
                <div className="flex items-center sm:gap-3 ">
                  <Image src={TrustCoin} alt="TRT" className="mr-1 sm:mr-0" />
                  <span className="text-xs font-semibold text-white sm:text-sm">
                    TRT
                  </span>
                  <Image src={arrowDown} alt="down arrow icon" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 rounded-xl bg-[#2A2D3C] p-2 text-sm font-semibold text-white">
                <DropdownMenuItem>TRT</DropdownMenuItem>
                <DropdownMenuItem>USDT</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <Plus color="#F4BC00" />
      </div>
      <div className="relative flex w-full justify-between rounded-[8px] border border-[#2A2D3C] p-4">
        <div className="max-w-[46%] sm:max-w-[60%] ">
          <div className="text-sm font-semibold text-white">Input</div>
          <input
            type="text"
            placeholder="0.0"
            className="max-w-[70%] bg-transparent text-[34px] text-[#F4BC00] "
          />
          <div className="text-sm  text-white">Balance: $0.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="">
            {secondToken === "" ? (
              <SelectAToken
                setSecondToken={setSecondToken}
                secondToken={secondToken}
              />
            ) : (
              <SelectAToken
                setSecondToken={setSecondToken}
                secondToken={secondToken}
                trigger={
                  <div className="flex cursor-pointer items-center gap-4">
                    <div className="text-sm font-semibold text-[#F4BC00]">
                      Max
                    </div>
                    <div className="flex items-center gap-2 rounded-[8px] border border-[#44485F] px-2 py-2 sm:gap-4 sm:px-4 sm:py-3">
                      <div className="size-6 rounded-full bg-[#44485F]"></div>
                      <span className="text-xs font-semibold text-white sm:text-sm">
                        {secondToken}
                      </span>
                    </div>
                  </div>
                }
              />
            )}
          </div>
        </div>
      </div>
      {secondToken !== "" && (
        <div className="relative mt-3 w-full">
          <div className="font-semibold text-white">Prices and pool share</div>
          <div className="mx-auto mt-6 flex w-[94%] justify-between text-center text-sm text-white">
            <div>
              <div>777.239</div>
              <div className="text-center text-xs text-[#ABAFC4]">
                USDT per ETH
              </div>
            </div>
            <div>
              <div>0.00128661</div>
              <div className="text-center text-xs text-[#ABAFC4]">
                ETH per USDT
              </div>
            </div>
            <div>
              <div>0%</div>
              <div className="text-center text-xs text-[#ABAFC4]">
                Share of Pool
              </div>
            </div>
          </div>
        </div>
      )}
      {secondToken === "" ? (
        <Button
          disabled
          className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
        >
          Invalid Pair
        </Button>
      ) : (
        <YouWillRecieve />
      )}
      {secondToken !== "" && (
        <div className="relative my-10 w-full">
          <div className="text-center text-xs text-white">
            When you add liquidity, you will receive pool tokens representing
            your position. These tokens automatically earn fees proportional to
            your share of the pool, and can be redeemed at any time.
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAPair;
