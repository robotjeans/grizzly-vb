import { NextPage } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeaderSection from '@/components/tos/HeaderSection';
import TermsSection from '@/components/tos/TermsSection';

const TOS: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <HeaderSection />
      <TermsSection />
    </Layout>
  );
};

export default TOS;
