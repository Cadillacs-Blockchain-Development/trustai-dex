"use client";
import React, { useState } from "react";
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
  tabs,
  Switch,
} from "@nextui-org/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { poppins } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import manageIcon from "@/public/icons/manage-icon.svg";
import riskIcon from "@/public/icons/risk-icon.svg";
import deleteIcon from "@/public/icons/delete-icon.svg";
import openLinkIcon from "@/public/icons/open-link-icon.svg";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const DefaultTab = ({ setActiveTab, tabs, setSecondToken }: any) => {
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
      <ModalHeader className="mt-4 flex flex-col gap-1 text-center text-2xl font-light text-[#F4BC00]">
        Select a Token
      </ModalHeader>
      <ModalBody>
        <input
          type="text"
          className="w-full rounded-[8px] border border-[#2A2D3C] bg-transparent px-4 py-5 text-sm font-semibold text-[#F4BC00] placeholder-[#888DAA]"
          placeholder="Search name or paste address"
        />
        <ScrollArea className="scroll mt-6 flex h-96 flex-col gap-2 pr-4 text-white">
          {commonBases.map((base, index) => (
            <div
              key={`common-base-list${base.title}${index}`}
              className="flex w-full cursor-pointer justify-between p-2"
              onClick={() => {
                setSecondToken(base.title);
                setActiveTab(tabs[1]);
              }}
            >
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-full bg-[#44485F]"></div>
                <div className="flex flex-col gap-2">
                  <div className="font-semibold leading-6">{base.title}</div>
                  <div className="text-sm text-[#ABAFC4]">{base.name}</div>
                </div>
              </div>
              <div className="text-sm text-[#ABAFC4]">{base.price}</div>
            </div>
          ))}
        </ScrollArea>
      </ModalBody>
      <ModalFooter>
        <div
          className="flex w-full items-center justify-center"
          onClick={() => setActiveTab(tabs[2])}
        >
          <div className="flex w-fit cursor-pointer gap-1 rounded-xl p-3 transition hover:bg-[#2C2D3A]">
            <Image src={manageIcon} alt="manage icon" />
            <span className="font-semibold text-[#F4BC00]">Manage</span>
          </div>
        </div>
      </ModalFooter>
    </>
  );
};

const ImportToken = ({ tabs, setActiveTab, secondToken }: any) => {
  return (
    <>
      <ModalHeader className="mt-4 flex max-w-[68%] justify-between gap-1 text-center text-2xl font-light text-[#F4BC00]">
        <div
          className="flex cursor-pointer items-center justify-center rounded-full transition hover:bg-[#2C2D3A] sm:p-2"
          onClick={() => setActiveTab(tabs[0])}
        >
          <ChevronLeft color="white" />
        </div>
        <span>Import Token</span>
      </ModalHeader>
      <ModalBody>
        <div className="mt-10 flex items-center gap-4">
          <div className="size-8 rounded-full bg-[#44485F]"></div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-white">
              {secondToken}
            </div>
            <div className="text-xs text-[#44485F]">
              0xB8c77482e45F1F44dE1745F52C74426C631bDD52
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <Image src={riskIcon} alt="risk icon" />
        </div>
        <div className="text-center text-2xl font-light text-[#F4BC00]">
          Trade at your own risk!
        </div>
        <div className="mx-auto max-w-[80%]  text-center text-sm text-[#ABAFC4]">
          Anyone can create a token, including creating fake versions of
          existing tokens that claim to represent projects. If you purchase this
          token, you may not be able to sell it back
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]">
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
};
const Manage = ({ tabs, setActiveTab }: any) => {
  const Lists = ({ setActiveManageTab, manageTabs }: any) => {
    const tokens = [
      { name: "Gemini Token list", tokens: "21" },
      { name: "Coin Gecko", tokens: "1923" },
      { name: "CMC Stablecoin", tokens: "18" },
      { name: "Uma", tokens: "81" },
      { name: "Compound", tokens: "88" },
    ];
    return (
      <>
        <input
          type="text"
          className="w-full rounded-[8px] border border-[#2A2D3C] bg-transparent px-4 py-5 text-sm font-semibold text-[#F4BC00] placeholder-[#888DAA]"
          placeholder="http:// or ipfs:// or ENS name"
        />
        <div className="mt-6 flex flex-col gap-6">
          {tokens.map((token, index) => (
            <div
              key={`swap-manage-tab-token-${token.name}`}
              className="flex w-full justify-between gap-4"
            >
              <div className="flex items-stretch gap-4">
                <div className="size-10 rounded-full bg-[#44485F]"></div>
                <div>
                  <div className="font-semibold text-white">{token.name}</div>
                  <div className="flex text-xs text-[#ABAFC4]">
                    {token.tokens} tokens ...
                  </div>
                </div>
              </div>
              <Switch
                defaultSelected
                aria-label="Transaction deadline"
                classNames={{
                  thumb: "bg-white",
                  wrapper: "group-data-[selected=true]:bg-[#F4BC00]",
                }}
              />
            </div>
          ))}
        </div>
      </>
    );
  };
  const Token = ({ setActiveManageTab, manageTabs }: any) => {
    return (
      <>
        <input
          type="text"
          className="w-full rounded-[8px] border border-[#2A2D3C] bg-transparent px-4 py-5 text-sm font-semibold text-[#F4BC00] placeholder-[#888DAA]"
          placeholder="0x000"
        />
        <div className="mt-6 flex w-full flex-col gap-8 px-2 py-4">
          <div className="flex w-full items-center justify-between">
            <div className="font-semibold text-white">3 Custom Token</div>
            <div className="cursor-pointer text-sm font-semibold text-[#FEBF32] hover:underline">
              Clear All
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-full bg-[#44485F]"></div>
              <div className="font-semibold text-white">TRT</div>
            </div>
            <div className="flex gap-4">
              <Image
                src={deleteIcon}
                alt="delete icon"
                className="cursor-pointer"
              />
              <Image
                src={openLinkIcon}
                alt="link icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-full bg-[#44485F]"></div>
              <div className="font-semibold text-white">BIDR</div>
            </div>
            <div className="flex gap-4">
              <Image
                src={deleteIcon}
                alt="delete icon"
                className="cursor-pointer"
              />
              <Image
                src={openLinkIcon}
                alt="link icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-full bg-[#44485F]"></div>
              <div className="font-semibold text-white">AAVE</div>
            </div>
            <div className="flex gap-4">
              <Image
                src={deleteIcon}
                alt="delete icon"
                className="cursor-pointer"
              />
              <Image
                src={openLinkIcon}
                alt="link icon"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  const manageTabs = [{ name: "lists" }, { name: "token" }];
  const [activeManageTab, setActiveManageTab] = useState("lists");
  return (
    <>
      <ModalHeader className="mt-4 flex max-w-[64%] justify-between gap-1 text-center text-2xl font-light text-[#F4BC00]">
        <div
          className="flex cursor-pointer items-center justify-center rounded-full transition hover:bg-[#2C2D3A] sm:p-2"
          onClick={() => setActiveTab(tabs[0])}
        >
          <ChevronLeft color="white" />
        </div>
        <span>Manage</span>
      </ModalHeader>
      <ModalBody>
        <div className="mt-10 flex items-center gap-4">
          <ul className="flex w-full justify-center gap-6 text-lg font-semibold ">
            {manageTabs.map((tab, index) => (
              <div
                key={`manage-tab-${tab.name}`}
                className={cn(
                  "cursor-pointer px-6 py-[10px] capitalize transition",
                  activeManageTab === tab.name
                    ? "border-b-2 border-[#F4BC00] text-[#F4BC00]"
                    : "text-[#888DAA]",
                )}
                onClick={() => setActiveManageTab(tab.name)}
              >
                {tab.name}
              </div>
            ))}
          </ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeManageTab ? activeManageTab : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeManageTab === "lists" ? (
              <Lists
                setActiveManageTab={setActiveManageTab}
                manageTabs={manageTabs}
              />
            ) : activeManageTab === "token" ? (
              <Token
                setActiveManageTab={setActiveManageTab}
                manageTabs={manageTabs}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </ModalBody>
      <ModalFooter>
        <Button className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]">
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
};

const SelectAToken = ({ trigger }: any) => {
  const tabs = [
    { name: "default", component: <DefaultTab /> },
    { name: "importToken", component: <ImportToken /> },
    { name: "manage", component: <Manage /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [secondToken, setSecondToken] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {trigger && <div onClick={onOpen}>{trigger}</div>}
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
            "mt-8 mr-4 transition-all focus:outline-none hover:bg-[#2C2D3A]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab ? activeTab.name : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab.name === "default" ? (
                  <DefaultTab
                    setActiveTab={setActiveTab}
                    tabs={tabs}
                    setSecondToken={setSecondToken}
                  />
                ) : activeTab.name === "importToken" ? (
                  <ImportToken
                    setActiveTab={setActiveTab}
                    tabs={tabs}
                    secondToken={secondToken}
                  />
                ) : activeTab.name === "manage" ? (
                  <Manage setActiveTab={setActiveTab} tabs={tabs} />
                ) : null}
              </motion.div>
            </AnimatePresence>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectAToken;
