"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateAPair from "@/components/liquidity/tabs/CreateAPair";
import { AnimatePresence, motion } from "framer-motion";
import DefaultTab from "./liquidity/tabs/default";
import RemoveLiquidity from "./liquidity/tabs/RemoveLiquidity";

const LiquidityComponent = () => {
  const tabs = [
    { name: "default", component: <DefaultTab /> },
    { name: "createAPair", component: <CreateAPair /> },
    { name: "removeLiquidity", component: <CreateAPair /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [secondToken, setSecondToken] = useState("");

  return (
    <div className="container mx-auto sm:w-[74%] ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab ? activeTab.name : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab.name === "default" ? (
            <DefaultTab setActiveTab={setActiveTab} tabs={tabs} />
          ) : activeTab.name === "createAPair" ? (
            <CreateAPair
              setActiveTab={setActiveTab}
              tabs={tabs}
              secondToken={secondToken}
              setSecondToken={setSecondToken}
            />
          ) : activeTab.name === "removeLiquidity" ? (
            <RemoveLiquidity setActiveTab={setActiveTab} tabs={tabs} />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LiquidityComponent;
