import { NextPage } from 'next';
import SEO from '@/components/SEO';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import HeaderSection from '@/components/home/HeaderSection';
import PartnerSection from '@/components/home/PartnerSection';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <HeaderSection />
      <PartnerSection />
      <GuaranteeSection />
    </>
  );
};

export default Home;
