"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Tooltip,
  Switch,
} from "@nextui-org/react";
import { poppins } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import { CircleHelp, Settings } from "lucide-react";

const TransacitonSettings = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const commonBases = [
    { title: "TRT", name: "TRT", price: "2.906" },
    { title: "WETH", name: "Ether", price: "212" },
    { title: "USDC", name: "USDC", price: "1" },
    { title: "ZRX", name: "Ox Protocol Token", price: "1326" },
    { title: "DAI", name: "Dai Stanblecoin", price: "3" },
    { title: "USDT", name: "USDT", price: "1" },
    { title: "WBTC", name: "Wrapped BTC", price: "0.02831" },
  ];
  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        className="flex w-full items-center justify-center bg-transparent p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
      >
        <Settings color="white" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className={cn(
          "min-w-[36%] rounded-2xl bg-[#17171A]",
          poppins.className,
        )}
        classNames={{
          closeButton:
            "mt-8 mr-4 transition focus:outline-none hover:bg-[#2C2D3A]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="mt-4 flex flex-col gap-1  text-2xl font-light text-[#F4BC00]">
                Transaction Settings
              </ModalHeader>
              <ModalBody>
                <div className="mt-2 flex items-center gap-2 text-white">
                  <span className="font-semibold leading-6">
                    Slippage tolerance
                  </span>
                  <Tooltip
                    showArrow={true}
                    content="Your transaction will revert if the price changes unfavorably by more than this percentage."
                    closeDelay={1000}
                    className="max-w-[60%] rounded-[8px] bg-[#2A2D3C] text-white"
                    classNames={{
                      arrow: "rounded-none bg-[#2A2D3C]",
                    }}
                    placement="right"
                  >
                    <CircleHelp size={16} />
                  </Tooltip>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
                    0.1%
                  </Chip>
                  <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
                    0.5%
                  </Chip>
                  <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
                    1.0%
                  </Chip>
                  <Chip className="h-fit w-[48px] cursor-pointer bg-[#222531] px-4 py-2 text-[#FEBF32]">
                    Auto
                  </Chip>
                </div>
                <div className="mt-10 flex items-center gap-2 text-white">
                  <span className="font-semibold leading-6">
                    Transaction deadline
                  </span>
                  <Tooltip
                    showArrow={true}
                    content="Your transaction will revert if it is pending for more than this long"
                    closeDelay={1000}
                    className="max-w-[60%] rounded-[8px] bg-[#2A2D3C] text-white"
                    classNames={{
                      arrow: "rounded-none bg-[#2A2D3C]",
                    }}
                    placement="right"
                  >
                    <CircleHelp size={16} />
                  </Tooltip>
                </div>
                <div className="mt-4 flex items-center gap-4 text-white">
                  <input
                    type="text"
                    placeholder="20"
                    className="max-w-[20%] rounded-[8px] border border-[#3B3C4E] bg-transparent px-4 py-2"
                  />
                  <span className="">Minutes</span>
                </div>
                <div className="mt-10 text-2xl font-light text-[#F4BC00]">
                  Interface Settings
                </div>
                <div className="mt-8 flex w-full items-center justify-between gap-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="leading-6">Transaction deadline</span>
                    <Tooltip
                      showArrow={true}
                      content="By passes confirmation modals and allows high slippage trades. Use at your own risk"
                      closeDelay={1000}
                      className="max-w-[60%] rounded-[8px] bg-[#2A2D3C] text-white"
                      classNames={{
                        arrow: "rounded-none bg-[#2A2D3C]",
                      }}
                      placement="right"
                    >
                      <CircleHelp size={16} />
                    </Tooltip>
                  </div>
                  <div>
                    <Switch
                      defaultSelected
                      aria-label="Transaction deadline"
                      classNames={{
                        thumb: "bg-white",
                        wrapper: "group-data-[selected=true]:bg-[#F4BC00]",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-8 flex w-full items-center justify-between gap-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="leading-6">Disable Multihops</span>
                    <Tooltip
                      showArrow={true}
                      content="Restricts swaps to direct pairs only"
                      closeDelay={1000}
                      className="max-w-[60%] rounded-[8px] bg-[#2A2D3C] text-white"
                      classNames={{
                        arrow: "rounded-none bg-[#2A2D3C]",
                      }}
                      placement="right"
                    >
                      <CircleHelp size={16} />
                    </Tooltip>
                  </div>
                  <div>
                    <Switch
                      defaultSelected
                      aria-label="Transaction deadline"
                      classNames={{
                        thumb: "bg-white",
                        wrapper: "group-data-[selected=true]:bg-[#F4BC00]",
                      }}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransacitonSettings;
