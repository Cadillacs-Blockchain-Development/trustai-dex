"ue client";
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
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/fonts";
import trnasactionSubmitted from "@/public/icons/transaction-succesfull.svg";
import Image from "next/image";

const TransactionSuccessfull = ({ setSecondToken, trigger }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="my-10 flex h-fit w-full items-center justify-center bg-[#F4BC00] p-4 font-semibold text-black disabled:bg-[#222531] disabled:text-[#4C516B]"
      >
        Confirm
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className={cn(
          "min-h-[40%] rounded-2xl bg-[#17171A]",
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
              <ModalBody>
                <div className="mt-14 flex w-full flex-col items-center justify-center text-white">
                  <Image
                    src={trnasactionSubmitted}
                    alt="transaction submitted"
                  />
                  <div className="mt-10 font-light">Transaction Submitted</div>
                  <div className="mt-2 text-sm font-semibold text-[#FEBF32] hover:underline ">
                    View on TRTSCAN
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransactionSuccessfull;
