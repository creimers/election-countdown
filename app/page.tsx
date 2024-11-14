import Countdown from "@/components/countdown";
import { grueneType } from "@/lib/font";

export default function Home() {
  return (
    <div className="space-y-12 lg:space-y-24 pt-24">
      {/* <div className="relative py-4 px-6 md:py-8 md:px-10 lg:py-12 lg:px-20 text-[#F5F1E9] inline-flex justify-center items-center">
        <span
          className={`z-40 ${grueneType.className} text-5xl md:text-7xl lg:text-9xl`}
        >
          Countdown
        </span>
        <div className={`absolute inset-0 z-0 bg-[#008939] -skew-x-12 `}></div>
      </div> */}
      <div
        className={`${grueneType.className} flex space-x-1 lg:space-x-4 justify-center text-3xl md:text-5xl lg:text-7xl`}
      >
        <span>Countdown</span>
        <span className="text-slate-900"> Bundestagswahl</span>
      </div>
      <div className="flex justify-center select-none">
        <div className="rounded-xl bg-black/40 px-6 lg:px-20 py-4 lg:py-12 border-slate-600 border">
          <div className="lg:w-[635px]">
            <Countdown targetDate={"2025-02-23"} />
          </div>
        </div>
      </div>
    </div>
  );
}
