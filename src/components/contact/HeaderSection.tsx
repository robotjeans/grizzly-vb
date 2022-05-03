import { FunctionComponent } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

const HeaderSection: FunctionComponent = () => {
  const classes = {
    hero_grid: 'grid-cols-two grid-rows-zero gap-x-8',
  };
  return (
    <section className="relative flex flex-row justify-center items-center">
      <div className="container relative flex w-full flex-col justify-center items-center mt-[100px] mx-[35px] mb-[80px]">
        <div
          className={clsx(
            'relative w-full h-auto justify-items-stretch section-grid',
            classes.hero_grid
          )}
        >
          <div className="block row-start-span-one row-end-span-one col-start-span-one col-end-span-one pl-0 pt-[100px]">
            <h1 className="w-[482px] mt-0 mb-6 text-5xl font-bold">
              <span className="text-black block">Let&apos;s</span>
              <span className="text-red-600 block">Talk</span>
            </h1>
            <p className="w-[480px] mb-0 text-2xl">
              Find out what we can do for you. Inquire today.
            </p>
            <div className="flex items-end mt-6">
              <p className="font-bold">Address</p>
              <p className="w-[480px] mb-0 text-2xl">
                1234 Doe Drive {''}
                Virginia Beach, VA 12345
              </p>
            </div>
            <div className="flex items-end mt-6">
              <p className="font-bold">Phone</p>
              <p className="w-[480px] mb-0 text-2xl">(757) 555-2323</p>
            </div>
            <div className="flex items-end mt-6">
              <p className="font-bold">Email</p>
              <p className="w-[480px] mb-0 text-2xl">
                hello@grizzlyhaulingvb.com
              </p>
            </div>
          </div>
          <div className="relative mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
