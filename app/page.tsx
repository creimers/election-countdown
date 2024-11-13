import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <div className="bg-[#005437] flex justify-center py-24 select-none">
      <div className="relative py-4 px-6 md:py-8 md:px-10 lg:py-12 lg:px-20 text-[#F5F1E9]">
        <div className="lg:w-[635px]">
          <Countdown targetDate={"2025-02-23"} />
        </div>
        <div className="absolute inset-0 z-0 bg-[#008939] -skew-x-12"></div>
      </div>
    </div>
  );
}
