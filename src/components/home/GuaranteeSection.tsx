import { FunctionComponent } from 'react';
import Link from 'next/link';
import ServiceArea from '@/components/common/ServiceArea';

const GuaranteeSection: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-center relative bg-slate-100">
      <div className="relative flex flex-col justify-center items-center w-full container my-20 mx-8">
        <div className="section-grid w-full grid-cols-two grid-rows-zero gap-x-8">
          <div className="block relative row-start-span-one row-end-span-one col-start-span-one col-end-span-one">
            <ServiceArea />
          </div>
          <div className="ml-24">
            <div className="h-1 w-14 mb-8 bg-red-600"></div>
            <h2 className="block -mr-4 mt-0 mb-6 justify-center items-center text-black text-4xl font-bold">
              Servicing the greater Virginia Beach & Hampton Roads area.
            </h2>
            <p className="mb-8 mt-0">
              We have the tools and experience to remove your unwanted trash no
              matter how big the load. We are licensed and insured so you can be
              certain you&apos;re hiring an established business. {''}
              <Link href="tel:7579937283">
                <a className="text-red-600 no-underline">
                  Call for free estimate.
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
