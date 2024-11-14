import Countdown from "@/components/countdown";
import { grueneType } from "@/lib/font";

export default function Home() {
  return (
    <div className="space-y-8 lg:space-y-16 pt-8 lg:pt-16">
      <div className="flex justify-center">
        <div className={`${grueneType.className} space-y-1 lg:space-y-3`}>
          <div className="text-xl md:text-3xl lg:text-5xl lg:-translate-x-12">
            Countdown
          </div>
          <div className="relative py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-8 text-[#005437] inline-flex justify-center items-center lg:translate-x-12">
            <span
              className={`z-40 ${grueneType.className} text-3xl md:text-5xl lg:text-7xl`}
            >
              Bundestagswahl
            </span>
            <div
              className={`absolute inset-0 z-0 bg-[#8ABD24] -skew-x-12 `}
            ></div>
          </div>
        </div>
      </div>
      {/* <div
        className={`${grueneType.className} flex space-x-1 lg:space-x-4 justify-center text-3xl md:text-5xl lg:text-7xl`}
      >
        <span>Countdown</span>
        <span className="text-slate-900"> Bundestagswahl</span>
      </div> */}
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
