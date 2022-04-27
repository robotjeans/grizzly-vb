import { NextPage } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GrizzlyHero from '@/components/home/GrizzlyHero';
import CustomerInsights from '@/components/home/CustomerInsights';
import GuaranteeSection from '@/components/home/GuaranteeSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <GrizzlyHero />
      <GuaranteeSection />
      <CustomerInsights />
    </Layout>
  );
};

export default Home;
