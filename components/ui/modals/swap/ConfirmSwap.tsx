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
import { CircleHelp } from "lucide-react";
import TransactionSuccessfull from "../common/TransactionSuccessfull";

const ConfirmSwap = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        className="h-fit w-full rounded-2xl bg-[#FEBF32] p-4 text-black"
      >
        <span className=" text-center text-base font-bold ">Confirm Order</span>
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
              <ModalHeader className="mt-4 flex flex-col gap-1 text-center text-2xl font-light text-[#F4BC00]">
                Confirm Swap
              </ModalHeader>
              <ModalBody>
                <div className="mt-14 flex w-full justify-between font-semibold text-white">
                  <div>From</div>
                  <div className="flex items-center gap-2">
                    <div>0.22 TRT</div>
                    <div className="size-8 rounded-full bg-[#44485F]"></div>
                  </div>
                </div>
                <div className="mt-8 flex w-full justify-between font-semibold text-white">
                  <div>To</div>
                  <div className="flex items-center gap-2">
                    <div>9.74 USDT</div>
                    <div className="size-8 rounded-full bg-[#44485F]"></div>
                  </div>
                </div>
                <div className="mt-8 flex w-full text-sm text-[#888DAA]">
                  Output is estimated. If the price changes by more than 0.5%
                  your transaction will revert.
                </div>
                <div className="mt-12 flex w-full items-center justify-between text-sm">
                  <div className="text-white">Price</div>
                  <div className="text-white">0.0021672 TRT per USDT</div>
                </div>
                <div className="mt-6 flex flex-col gap-4 px-4 py-2 text-sm text-white">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>Minimum received</div>
                      <Tooltip
                        showArrow={true}
                        content="Your transation will revert if there is a large, unfavorable price movement before it is confirmed"
                        closeDelay={1000}
                        className="max-w-[40%] rounded-[8px] bg-[#2A2D3C] text-white"
                        classNames={{
                          arrow: "rounded-none bg-[#2A2D3C]",
                        }}
                        placement="right"
                      >
                        <CircleHelp size={16} />
                      </Tooltip>
                    </div>
                    <div>9.74 USDT</div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>Price Impact</div>
                      <Tooltip
                        showArrow={true}
                        content="The difference between the market price and estimated price due to trade size"
                        closeDelay={1000}
                        className="max-w-[40%] rounded-[8px] bg-[#2A2D3C] text-white"
                        classNames={{
                          arrow: "rounded-none bg-[#2A2D3C]",
                        }}
                        placement="right"
                      >
                        <CircleHelp size={16} />
                      </Tooltip>
                    </div>
                    <div>{"<0.01%"}</div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>Liquidity Provider Fee</div>
                      <Tooltip
                        showArrow={true}
                        content="A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive"
                        closeDelay={1000}
                        className="max-w-[40%] rounded-[8px] bg-[#2A2D3C] text-white"
                        classNames={{
                          arrow: "rounded-none bg-[#2A2D3C]",
                        }}
                        placement="right"
                      >
                        <CircleHelp size={16} />
                      </Tooltip>
                    </div>
                    <div>0.000066 TRT</div>
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

export default ConfirmSwap;
