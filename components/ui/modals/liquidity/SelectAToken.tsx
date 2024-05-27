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
} from "@nextui-org/react";
import { poppins } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import manageIcon from "@/public/icons/manage-icon.svg";
import Image from "next/image";
import { CircleHelp } from "lucide-react";

const SelectAToken = ({ setSecondToken, trigger, secondToken }: any) => {
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
      {trigger ? (
        <div onClick={onOpen}>{trigger}</div>
      ) : (
        <Button
          onPress={onOpen}
          className="bg-[#F4BC00] font-semibold text-black"
        >
          Select a token
        </Button>
      )}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className={cn(
          "min-h-[90%] min-w-[36%] rounded-2xl bg-[#17171A]",
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
              <ModalHeader className="mt-4 flex flex-col gap-1 text-center text-2xl font-light text-[#F4BC00]">
                Select a Token
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  className="w-full rounded-[8px] border border-[#2A2D3C] bg-transparent px-4 py-5 text-sm font-semibold text-[#F4BC00] placeholder-[#888DAA]"
                  placeholder="Search name or paste address"
                />
                <div className="my-2 flex items-center gap-2 text-white">
                  <span className="font-semibold leading-6">Common Bases</span>
                  <Tooltip
                    showArrow={true}
                    content="These tokens are commonly paired with other tokens"
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
                <div className="flex flex-wrap gap-4">
                  {commonBases.map((base, index) => (
                    <Chip
                      key={`common-base-chip${base.title}${index}`}
                      className={cn(
                        "cursor-pointer bg-[#222531] px-4 text-sm text-white transition hover:bg-[#1b1d27]",
                        secondToken === base.title &&
                          "bg-[#F4BC00] text-black hover:bg-[#F4BC00]",
                      )}
                      onClick={() => {
                        setSecondToken(base.title);
                        onClose();
                      }}
                      startContent={
                        <div className="mr-2 size-5 rounded-full bg-[#44485F]"></div>
                      }
                    >
                      {base.title}
                    </Chip>
                  ))}
                </div>
                <ScrollArea className="scroll mt-6 flex h-72 flex-col gap-2 pr-4 text-white">
                  {commonBases.map((base, index) => (
                    <div
                      key={`common-base-list${base.title}${index}`}
                      className={cn(
                        "mb-2 flex w-full cursor-pointer justify-between rounded-[8px] p-2 transition hover:bg-[#222531]",
                        secondToken === base.title &&
                          "bg-[#F4BC00] text-black hover:bg-[#F4BC00]",
                      )}
                      onClick={() => {
                        setSecondToken(base.title);
                        onClose();
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-8 rounded-full bg-[#44485F]"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-semibold leading-6">
                            {base.title}
                          </div>
                          <div
                            className={cn(
                              "text-sm text-[#ABAFC4]",
                              secondToken === base.title && " text-black ",
                            )}
                          >
                            {base.name}
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "text-sm text-[#ABAFC4]",
                          secondToken === base.title && " text-black ",
                        )}
                      >
                        {base.price}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </ModalBody>
              <ModalFooter>
                <div className="flex w-full items-center justify-center">
                  <div className="flex w-fit cursor-pointer gap-1 rounded-xl p-3 transition hover:bg-[#2C2D3A]">
                    <Image src={manageIcon} alt="manage icon" />
                    <span className="font-semibold text-[#F4BC00]">Manage</span>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectAToken;
