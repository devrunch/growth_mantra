import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const probeItems = [
  "Market research, Ideal Customer Profile, and competitor analysis",
  "Comprehensive data analysis",
  "Customer journey mapping",
  "Identifying key performance indicators (KPIs)",
];
const uncoverItems = [
  "Reveal untapped market segments",
  "Identify bottlenecks in the customer journey",
  "Discover underutilized channels or resources",
  "Pinpoint areas for optimization and innovation",
];

const leverageItems = [
  "Create personalized customer experiences",
  "Develop multi-channel growth plans",
  "Customer journey mapping ",
  "Identifying key performance indicators (KPIs)",
];

const synthesizesItems = [
  " Integrate marketing, sales, and product strategies",
  "Align business goals with marketing objectives",
  "Combine short-term tactics with long-term vision ",
  "Blend creativity with data-driven decision making",
];

const executeItems = [
  " Implement strategies with agile methodologies",
  "Conduct regular A/B testing and optimization ",
  "Monitor KPIs and adjust tactics in real-time tems",
];

const Pulse = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full  flex flex-col justify-center items-center px-4 lg:px-16 gap-10">
          <div className="text-4xl md:text-5xl lg:text-8xl text-[#E74C3C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#E74C3C]">PULSE</span>
              Framework
            </p>
          </div>
          <p className="text-2xl lg:text-3xl tracking-wide leading-6">
            {` At The Growth Mantra, we've developed a unique, process-oriented
            approach to solving business and marketing challenges across
            industries. We call it the PULSE Framework - a strategic, powerful,
            and adaptable system that drives sustainable growth for startups and
            businesses at any stage.`}
          </p>
        </div>
        <div className="relative h-auto pb-20">
          <div className="absolute inset-52 top-[-90px] left-0">
            <Image
              src="/treevector.png"
              alt="tree"
              width={1000}
              height={500}
              className="object-left  h-full"
            />
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[150px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#E74C3C]">P</span>&nbsp;-&nbsp;Probe
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-bold">
                  We begin by deeply probing your business ecosystem, market
                  dynamics, and customer behavior. This involves:
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  {probeItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[50px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#E74C3C]">U</span>&nbsp;-&nbsp;Uncover
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-bold">
                  With insights from our probe, we uncover hidden opportunities
                  and challenges:
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  {uncoverItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[120px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#E74C3C]">L</span>
                &nbsp;-&nbsp;Leverage
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-bold">
                  We leverage our findings to craft tailored strategies: Develop
                  multi-channel growth plans Customer journey mapping
                  Identifying key performance indicators (KPIs)
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  {leverageItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[400px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#E74C3C]">S</span>&nbsp;-&nbsp;Synthesize
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-bold">
                  Our approach synthesizes various growth levers for maximum
                  impact
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  {synthesizesItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[650px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#E74C3C]">E</span>&nbsp;-&nbsp; Execute &
                Evolve
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-bold">
                  {`We don't just strategize; we execute with precision and
                  continuously evolve:`}
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  {executeItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center">
          <div
            className="group rounded-full w-fit px-6 py-4 flex text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
          >
            Scale Smarter, Not Harder - Get Your Custom Roadmap
            <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </div>
        <hr className="border-t-2 w-full" />
      </div>
    </>
  );
};

export default Pulse;
