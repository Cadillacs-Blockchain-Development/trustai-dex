import { aleo, poppins, rubik } from "@/utils/fonts";
import Image from "next/image";
import TrustCoin from "@/public/trustAICoin.svg";
import Usdt from "@/public/Usdt.svg";
import ExhangeIcon from "@/public/icons/exchange-swap.svg";
import Chart from "@/components/Chat";
import { Suspense } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Conversion from "@/components/Conversion";
import initTranslations from "../i18n";
import TranslationsProvider from "@/lib/TranslationsProviders";

const i18nNamespaces = ["home", "common"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <main
        className={`${poppins.className} mx-auto flex max-w-[1440px] flex-col gap-6 px-4 lg:flex-row lg:px-0 lg:pl-14 `}
      >
        {/* left content */}
        <div className="mt-16 basis-[60%] ">
          <div className="flex gap-3">
            <div className="flex">
              <Image
                src={TrustCoin}
                alt="Trust Coin"
                className="relative z-10"
              />
              <Image src={Usdt} alt="Usdt" className="relative z-20 -ml-2" />
            </div>
            <div className="flex text-lg font-semibold text-white">
              <span>TRT/</span>
              <span className="mr-2 font-bold text-[#8B8CA7]">USDT</span>
              <Image src={ExhangeIcon} alt="exchange icon" />
            </div>
          </div>

          <div className={`${rubik.className} mt-6`}>
            <span className="text-5xl font-bold text-white">1.0005 USDT</span>
          </div>

          <div className="mt-2 flex w-full items-center justify-between">
            <div className="text-sm font-normal">
              <span className="mr-2 text-[#53F3C3]">+227.543364 USDT</span>
              <span className="text-white ">{t("chart_time")}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-white">
              <span className="rounded-xl bg-[#3B3C4E] px-4 py-1">24H</span>
              <span>1W</span>
              <span>1M</span>
            </div>
          </div>
          <div className="mt-6">
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <Chart />
            </Suspense>
          </div>
        </div>

        {/* right content */}
        <Conversion />
      </main>
    </TranslationsProvider>
  );
}
