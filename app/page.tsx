import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <div className="bg-[#005437] flex justify-center py-24">
      <div className="w-2/3 2xl:w-1/2 relative p-8 pl-12 text-[#F5F1E9]">
        <Countdown targetDate={"2025-02-23"} />
        <div className="absolute inset-0 z-0 bg-[#008939] -skew-x-12"></div>
      </div>
    </div>
  );
}
