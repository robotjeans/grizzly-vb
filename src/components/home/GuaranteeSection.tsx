import { FunctionComponent } from 'react';
import CheckFeatures from '@/components/CheckFeatures';

const GuaranteeSection: FunctionComponent = () => (
  <section className="bg-white-600 w-full py-12">
    <div className="container flex items-center justify-center">
      <CheckFeatures />
    </div>
  </section>
);

export default GuaranteeSection;
