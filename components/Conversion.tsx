"use client";
import { aleo, poppins } from "@/utils/fonts";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import TrustCoin from "@/public/trustAICoin.svg";
import React from "react";

const Conversion = () => {
  return (
    <div
      className={`${poppins.className} bg-[#23242F] h-[calc(100vh+12px)] flex-1 relative -top-12 pt-3 px-9`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image src={TrustCoin} alt="Trust Coin" />
          <span className={`${aleo.className} text-white text-sm `}>$0.91</span>
        </div>
        <div className="bg-[#2C2D3A] rounded-full flex items-center gap-1 pl-4">
          <div className="bg-[#DAA200] size-2 rounded-full"></div>
          <span className="text-white text-sm mr-4">TRT</span>
          <div>
            <ConnectWallet
              btnTitle="Connect to a wallet"
              style={{
                borderRadius: "9999px",
                color: "black",
                fontWeight: "600",
                height: "fit-content",
                padding: "8px 16px",
                background: "linear-gradient(90deg, #DAA200 0%, #FFD600 100%)",
              }}
              modalSize="compact"
            />
          </div>
        </div>
        <div className="bg-[#3B3C4E] rounded-xl size-10 flex items-center justify-center">
          <div className="size-[18px] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
