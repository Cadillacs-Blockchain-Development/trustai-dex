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
import { motion } from "framer-motion";

const TransactionSuccessfullIcon = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.4 + i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M32.5029 33.3533H46.6463V47.4966"
        stroke="#F4BC00"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M46.6651 33.3333L21.5817 58.4167C19.8217 60.1767 16.9651 60.1767 15.2051 58.4167V58.4167C10.7717 53.9833 8.27505 47.97 8.26172 41.7V41.7C8.26172 37.6 9.05505 33.5 10.6317 29.6433C12.1851 25.8467 14.4951 22.29 17.5784 19.21C23.1084 13.68 30.7484 10.26 39.1851 10.26C47.6217 10.26 55.2617 13.68 60.7917 19.21C66.3217 24.74 69.7417 32.3767 69.7417 40.8167C69.7417 49.2533 66.3217 56.8933 60.7917 62.4233C55.2617 67.9533 47.6251 71.3733 39.1851 71.3733C35.8951 71.3733 32.6117 70.8067 29.4617 69.7467"
        stroke="#F4BC00"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
};

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
                  {/* <Image
                    src={trnasactionSubmitted}
                    alt="transaction submitted"
                  /> */}
                  <TransactionSuccessfullIcon />
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
