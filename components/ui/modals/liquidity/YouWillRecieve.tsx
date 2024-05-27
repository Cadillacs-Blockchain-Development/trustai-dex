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
import TransactionSuccessfull from "../common/TransactionSuccessfull";
const YouWillRecieve = ({ setSecondToken, trigger }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
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

export default YouWillRecieve;
