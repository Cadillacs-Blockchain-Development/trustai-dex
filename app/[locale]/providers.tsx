"use client";

import React from "react";
// import { ChainId } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// const activeChainId = ChainId.BinanceSmartChainTestnet;

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
        {children}
      </ThirdwebProvider>
    </div>
  );
};

export default Providers;
