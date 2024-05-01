import { aleo, poppins, rubik } from "@/utils/fonts";
import Image from "next/image";
import TrustCoin from "@/public/trustAICoin.svg";
import Usdt from "@/public/Usdt.svg";
import ExhangeIcon from "@/public/icons/exchange-swap.svg";
import Chart from "@/components/Chat";
import { Suspense } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Conversion from "@/components/Conversion";

export default function Home() {
  return (
    <main className={`${poppins.className} container mx-auto pl-14 flex gap-6`}>
      {/* left content */}
      <div className="basis-[60%] mt-16 ">
        <div className="flex gap-3">
          <div className="flex">
            <Image src={TrustCoin} alt="Trust Coin" className="relative z-10" />
            <Image src={Usdt} alt="Usdt" className="-ml-2 relative z-20" />
          </div>
          <div className="text-lg font-semibold text-white flex">
            <span>TRT/</span>
            <span className="text-[#8B8CA7] font-bold mr-2">USDT</span>
            <Image src={ExhangeIcon} alt="exchange icon" />
          </div>
        </div>

        <div className={`${rubik.className} mt-6`}>
          <span className="text-white font-bold text-5xl">1.0005 USDT</span>
        </div>

        <div className="mt-2 w-full flex justify-between items-center">
          <div className="text-sm font-normal">
            <span className="text-[#53F3C3] mr-2">+227.543364 USDT</span>
            <span className="text-white ">Past 24 Hours</span>
          </div>
          <div className="text-white text-sm flex items-center justify-center gap-3">
            <span className="bg-[#3B3C4E] rounded-xl px-4 py-1">24H</span>
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
  );
}
