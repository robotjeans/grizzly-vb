import { FunctionComponent } from 'react';
import CheckFeatures from '../CheckFeatures';

const PartnerSection: FunctionComponent = () => (
  <section className="flex items-center justify-center relative bg-white">
    <div className="relative flex flex-col justify-center items-center w-full container my-20 mx-8">
      <CheckFeatures />
    </div>
  </section>
);

export default PartnerSection;
