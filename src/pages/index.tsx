import { NextPage } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import HeaderSection from '@/components/home/HeaderSection';
import PartnerSection from '@/components/home/PartnerSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <HeaderSection />
      <PartnerSection />
      <GuaranteeSection />
    </Layout>
  );
};

export default Home;
