"use client";

import React from "react";
// import { ChainId } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { NextUIProvider } from "@nextui-org/system";

// const activeChainId = ChainId.BinanceSmartChainTestnet;

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
        <NextUIProvider>{children}</NextUIProvider>
      </ThirdwebProvider>
    </div>
  );
};

export default Providers;
