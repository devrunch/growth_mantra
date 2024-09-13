import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        <div className="w-full h-full bg-[#16213E] flex justify-center items-center text-white text-sm md:text-lg gap-2 md:gap-5 py-1">
          <div>"LowMarketingBudget?We'veGotYou!"</div>
          <div className="px-4 py-2 rounded-full bg-[#E74C3C] text-sm md:text-lg">
            Schedule a call
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-3 text-sm md:text-lg lg:gap-10 py-4 text-[#6F6F6F]">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">About us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
