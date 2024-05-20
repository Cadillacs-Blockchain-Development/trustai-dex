import React from "react";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/lib/TranslationsProviders";
import { poppins } from "@/utils/fonts";
import { Button } from "@/components/ui/button";
import infoIcon from "@/public/icons/info-icon.svg";
import noLiauidityIcon from "@/public/icons/no-liquidity-icon.svg";
import Image from "next/image";

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
      <div className="mx-auto sm:w-[74%] ">
        <div className="relative flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-5xl font-light text-[#F4BC00]">
            Your Liquidity
          </div>
          <div className="flex gap-4">
            <Button className="size-fit rounded-xl bg-[#222531] p-4 font-semibold text-[#F4BC00] hover:bg-[#2e3242]">
              Create a Pair
            </Button>
            <Button className="size-fit rounded-xl bg-[#F4BC00] p-4 font-semibold text-black transition hover:bg-[#f4bb00e7]">
              Add Liquidity
            </Button>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm leading-6 sm:justify-start">
          <div className="text-white">Liquidity provider rewards</div>
          <Image src={infoIcon} alt="info-icon" />
        </div>
        <div className="mt-[72px] flex flex-col items-center justify-center gap-3">
          <Image src={noLiauidityIcon} alt="no-liquidity-icon" />
          <div className="text-sm text-[#ABAFC4]">No liquidity found.</div>
        </div>
        <div className="mt-16 text-center text-sm text-white">
          Don&apos;t see a pool you joined?
          <span className="ml-1 cursor-pointer text-[#2C2D3A] underline">
            Import it
          </span>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
