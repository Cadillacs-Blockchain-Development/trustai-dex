import React from "react";
import initTranslations from "@/app/i18n";
import { poppins } from "@/utils/fonts";
import LiquidityComponent from "@/components/LiquidityComponent";

const i18nNamespaces = ["home", "common"];

const Liquidity = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <div
      className={`${poppins.className} container mx-auto mt-32 flex flex-col gap-6 pl-4 lg:flex-row lg:px-0 lg:pl-14`}
    >
      <LiquidityComponent />
    </div>
  );
};

export default Liquidity;
