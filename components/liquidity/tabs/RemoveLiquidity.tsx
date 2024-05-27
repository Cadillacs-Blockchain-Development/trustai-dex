import { Button, Chip } from "@nextui-org/react";
import { ChevronLeft, Settings } from "lucide-react";
import React from "react";

const RemoveLiquidity = ({
  setActiveTab,
  tabs,
  secondToken,
  setSecondToken,
}: any) => {
  return (
    <div className="mx-auto -mt-10 sm:w-[54%]">
      <div className="relative flex w-full flex-row items-center justify-between gap-4">
        <div
          className="flex cursor-pointer items-center justify-center rounded-full p-2 transition hover:bg-[#2C2D3A]"
          onClick={() => setActiveTab(tabs[0])}
        >
          <ChevronLeft color="white" />
        </div>
        <div className="text-xl font-light text-[#F4BC00] sm:text-2xl">
          Remove Liquidity
        </div>
        <Settings color="white" />
      </div>

      <div className="relative mt-10 w-full rounded-[8px] bg-[#2C2D3A] p-4 text-xs leading-6 text-[#F4BC00]">
        <span className="font-bold">Tip: </span>Removing pool tokens converts
        your position back into undertying tokens at the current rate,
        proportional to your share of the pool. Accrued fees are included in the
        amuount you receive.
      </div>

      <div className="relative mt-10 flex w-full justify-between text-sm font-semibold">
        <div className=" text-white">Amount</div>
        <div className="text-[#FEBF32]">Detailed</div>
      </div>
      <div className="mt-6 text-center text-5xl font-light text-[#FEBF32]">
        62%
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
          25%
        </Chip>
        <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
          50%
        </Chip>
        <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
          75%
        </Chip>
        <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
          Max
        </Chip>
      </div>
      <div className="mt-6 w-full rounded-[8px] border border-[#44485F] p-4 text-sm text-[#ABAFC4]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">0.000000231401</div>
          <div className="flex items-center gap-2">
            <div className="">TRT</div>
            <div className="size-6 rounded-full bg-[#44485F]"></div>
          </div>
        </div>
        <div className="mt-5 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">0.00022588</div>
          <div className="flex items-center gap-2">
            <div className="">MPL</div>
            <div className="size-6 rounded-full bg-[#44485F]"></div>
          </div>
        </div>
        <div className="my-5 cursor-pointer text-right text-sm font-semibold text-[#F4BC00] hover:underline">
          Receive WTRT
        </div>
      </div>

      <div className="mt-6 flex w-full justify-between p-4 text-sm text-[#ABAFC4]">
        <div>Price</div>
        <div className="flex flex-col items-end justify-start">
          <div>1 TRT = 976.176 MPL</div>
          <div>1AMPL = 0.00102441 TRT</div>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <Button className="my-10 flex h-fit w-full items-center justify-center  bg-[#222531] p-4 font-semibold text-[#F4BC00] disabled:text-[#4C516B]">
          Approve
        </Button>
        <Button
          disabled
          className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default RemoveLiquidity;
