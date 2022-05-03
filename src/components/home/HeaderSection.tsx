import { FunctionComponent } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import SubscribeForm from '../forms/SubscribeForm';

const HeaderSection: FunctionComponent = () => {
  const classes = {
    hero_grid: 'grid-cols-two grid-rows-zero gap-x-8',
    hero_background:
      'absolute left-0 top-0 right-0 bottom-auto -z-[999] block h-[670px] items-start opacity-10 skew-x-[0deg] skew-y-[-5deg]',
  };
  return (
    <section className="relative flex flex-row justify-center items-center bg-red-600">
      <div className="container relative flex w-full flex-col justify-center items-center mt-[100px] mx-[35px] mb-[80px]">
        <div
          className={clsx(
            'relative w-full h-auto justify-items-stretch section-grid',
            classes.hero_grid
          )}
        >
          <div className="block row-start-span-one row-end-span-one col-start-span-one col-end-span-one pl-0 pt-[100px]">
            <h1 className="w-[482px] mt-0 mb-6 text-7xl font-bold">
              <span className="text-white block">Grizzly</span>
              <span className="text-white block">Hauling</span>
            </h1>
            <p className="w-[480px] mb-0 text-black text-2xl">
              Virginia Beach hauling & junk removal services. We do the heavy
              lifting, so you can focus on your latest project.
            </p>
            <div className="flex items-end mt-6">
              <SubscribeForm />
            </div>
            <div className="flex flex-col mt-6">
              {/* @todo Fetch From Google */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star_icon.svg"
                    width={18}
                    height={18}
                    alt="Star"
                    className="inline-block mx-0 max-w-full my-2"
                  />
                ))}
              </div>
              <div className="block mb-4">
                Rated 5/5 overall across 10+ Google reviews
              </div>
            </div>
          </div>
          <div className="relative mt-10">
            <Image
              src="/images/broken_sofa.jpeg"
              alt="broken sofa"
              layout="fill"
              className="object-fill fixed max-w-full h-fulls inline-block align-middle"
            />
          </div>
        </div>
      </div>
      <svg id="hero-wave" viewBox="0 0 1920 395">
        <path
          id="svg-wave"
          fill="currentColor"
          fillRule="evenodd"
          d="M.45 362.016C344.64 244.726 409.171 241.258 938 290.5c528.828 49.242 833.56-59.446 989-300.5-.484 2.139-2.094 142.61-4.829 421.413L1.941 426C.026 382.178-.472 360.85.45 362.016z"
        ></path>
      </svg>
    </section>
  );
};

export default HeaderSection;
