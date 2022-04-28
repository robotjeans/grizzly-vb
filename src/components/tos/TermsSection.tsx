import { FunctionComponent } from 'react';

const TermsSection: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-center relative h-screen">
      <div className="relative flex flex-col justify-center items-center w-full container my-20 mx-8">
        <h1 className="mt-40 text-6xl font-semibold text-red-600">
          Terms of Service
        </h1>
        <div className="mt-2">
          <p>Effective: 28/04/2022</p>
          <p>Author: Shawn Sheehan</p>
        </div>

        <div className=" mt-10">
          <h1 className="mt-8 text-4xl font-semibold text-red-600">
            Legal Requirements
          </h1>
          <p className="mt-4 text-xl font-light leading-9">
            All users of Grizzly Hauling who choose to subscribe to the email
            list or book an appointment must be no younger than 18 years of age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
