import { FunctionComponent } from 'react';
import Container from '@/components/common/Container';

const PartnerSection: FunctionComponent = () => (
  <section className="bg-red-600 w-full p-6">
    <Container className="grid grid-cols-1 gap-x-16 max-w-screen-2xl md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center justify-center flex-wrap"></div>
      <div className="flex items-center justify-center flex-wrap">
        <h4 className="text-white text-4xl font-bold"> (757) 555 2343</h4>
      </div>
      <div className="flex items-center justify-center flex-wrap"></div>
    </Container>
  </section>
);

export default PartnerSection;
