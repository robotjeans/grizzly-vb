import Image from 'next/image';
import { FunctionComponent } from 'react';
import { IconPackage } from '@tabler/icons';
import Button from '@/components/common/Button';
import Link from 'next/link';

const AboutSection: FunctionComponent = () => {
  return (
    <section className="overflow-hidden py-12 bg-blue-dark">
      <div className="container flex flex-col items-center 3xl:flex-row 3xl:justify-center">
        <div className="mb-4 text-center 2xl:mr-12 3xl:text-left">
          <IconPackage
            className="p-2 mx-auto mb-4 bg-blue-light-contrast rounded-xl 3xl:mx-0"
            size={55}
            stroke={1.5}
          />
          <h1 className="font-extrabold">Experienced and Reliable</h1>
          <p className="max-w-2xl text-blue-100">
            We have the tools and experience to remove your unwanted trash no
            matter how big the load. We are licensed and insured so you can be
            certain you&apos;re hiring an established business.
          </p>
          <Link href="#">
            <a>
              <Button className="mt-8 w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                Free Estimate
              </Button>
            </a>
          </Link>
        </div>
        <div className="-mb-40 w-11/12 xl:w-5/6 3xl:-mb-3 3xl:w-320">
          {/*
              <Image
            src="/img/InstallerScreenshot.png"
            alt="Installer"
            width={1200}
            height={850}
            quality={90}
            objectFit="contain"
          />
            */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
