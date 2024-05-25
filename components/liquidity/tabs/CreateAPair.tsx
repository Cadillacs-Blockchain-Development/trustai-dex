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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TrustCoin from "@/public/trustAICoin.svg";
import Usdt from "@/public/Usdt.svg";
import arrowDown from "@/public/icons/arrow-down.svg";
import { ChevronLeft, CircleHelp, Plus, Settings } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";
import manageIcon from "@/public/icons/manage-icon.svg";

import TransactionSuccessfull from "@/components/ui/modals/common/TransactionSuccessfull";

const SelectAToken = ({ setSecondToken, trigger }: any) => {
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
                      className="bg-[#222531] px-4  text-sm text-white"
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
                      className="flex w-full justify-between p-2 "
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-8 rounded-full bg-[#44485F]"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-semibold leading-6">
                            {base.title}
                          </div>
                          <div className="text-sm text-[#ABAFC4]">
                            {base.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-[#ABAFC4]">{base.price}</div>
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

const YouWillRecieve = ({ setSecondToken, trigger }: any) => {
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
        className="my-10 flex w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
      >
        Supply
      </Button>
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
                You will Recieve
              </ModalHeader>
              <ModalBody>
                <div className="mt-14 flex w-full justify-between font-semibold text-white">
                  <div>0.001588</div>
                  <div className="flex items-center gap-2">
                    <div>TRT</div>
                    <div className="size-8 rounded-full bg-[#44485F]"></div>
                  </div>
                </div>
                <div className="mt-8 flex w-full justify-between font-semibold text-white">
                  <div>1.23425</div>
                  <div className="flex items-center gap-2">
                    <div>MPL</div>
                    <div className="size-8 rounded-full bg-[#44485F]"></div>
                  </div>
                </div>
                <div className="mt-8 flex w-full max-w-[90%] text-sm text-[#888DAA]">
                  Output is estimated. If the price changes by more than 0.5%
                  your transaction will revert.
                </div>
                <div className="mt-6 flex w-full justify-between  text-lg font-semibold text-white">
                  TRT/AMPL
                </div>
                <div className="mt-6 w-full rounded-[8px] border border-[#44485F] p-4  text-sm text-[#ABAFC4]">
                  <div className="flex w-full items-center justify-between">
                    <div>UNI ETH/AMPL Burned</div>
                    <div className="flex items-center gap-2">
                      0.000000033725
                      <div className="size-8 rounded-full bg-[#44485F]"></div>
                      <div className="size-8 rounded-full bg-[#44485F]"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-between">
                    <div>Price</div>
                    <div className="flex flex-col items-end justify-start gap-2">
                      <span>1 TRT = 976.176 MPL</span>
                      <span>1 MPL = 0.00102441 TRT</span>
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-between">
                    <div>Share of Pool</div>
                    <div className="flex items-center gap-2">0.000001546%</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <TransactionSuccessfull />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

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
              <SelectAToken setSecondToken={setSecondToken} />
            ) : (
              <SelectAToken
                setSecondToken={setSecondToken}
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
