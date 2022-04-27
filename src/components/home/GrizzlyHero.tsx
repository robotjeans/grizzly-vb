import { FunctionComponent } from 'react';
import Image from 'next/image';
import SubscribeForm from '../forms/SubscribeForm';

const GrizzlyHero: FunctionComponent = () => {
  return (
    <section className="relative pt-16 lg:py-32 bg-white">
      <Image
        src="/images/house_before.jpg"
        alt="House before clean up"
        layout="fill"
        className="object-cover fixed z-0 w-screen h-screen opacity-60"
      />
      <div className="absolute bottom-0 left-0 w-full bg-white h-28 md:hidden"></div>
      <div className="container pt-16 md:pt-20">
        <div className="relative items-center justify-between md:flex">
          <div className="space-y-8 text-center md:max-w-lg md:text-left md:w-6/12 lg:w-6/12">
            <div className="space-y-4">
              <h1 className="text-8xl font-bold">
                <span className="text-black block">Grizzly</span>
                <span className="text-red-600 block">Hauling</span>
              </h1>
              <div className="mt-2">
                <p className="text-lg lg:text-xl tracking-tighter text-black-400 mix-blend-darken">
                  Virginia Beach hauling & junk removal services. We do the
                  heavy lifting, so you can focus on your latest project.
                </p>
              </div>
            </div>
            <div>
              <SubscribeForm />
            </div>
          </div>
          <div className="relative top-0 right-0 pt-12 -mt-5 md:w-6/12 lg:w-6/12 lg:absolute md:pl-6 md:pt-0">
            <div className="absolute top-0 left-0 w-7/12 mt-16 md:-ml-40 md:-mt-8 md:w-8/12"></div>
            <div className="relative z-10 flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrizzlyHero;
