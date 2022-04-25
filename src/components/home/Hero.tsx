import { FunctionComponent } from 'react';
import Image from 'next/image';

const Hero: FunctionComponent = () => {
  return (
    <div className="w-full p-0">
      <div className="flex flex-1 flex-row items-center relative mb-4 justify-between">
        <div className="relative pt-[5%] pointer-events-none w-1/3">
          <h1 className="text-black text-xl text-left font-semibold text-[clamp(32px,5.6rem,66px)] leading-[clamp(42px,6.6rem,76px)] mb-[clamp(12px,2.4rem,24px)] tracking-[-.2px]">
            Virginia Beach Hauling & Junk Removal Services
          </h1>
          <p className="text-[clamp(20px,2rem,24px)] leading-[clamp(28px,3.2rem,36px)] text-black-900 mb-10 pr-[20%]">
            We do the heavy lifting, so you can focus on your latest project!
          </p>
        </div>
        <div className="relative pt-[5%] pointer-events-none w-2/3 flex justify-end">
          <div className="ml-auto">
            <Image
              src="/images/junk.webp"
              alt="Virginia Beach Hauling & Junk Removal Services"
              width={769}
              height={433}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
