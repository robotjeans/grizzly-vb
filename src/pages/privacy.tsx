import { NextPage } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeaderSection from '@/components/privacy/HeaderSection';
import PrivacySection from '@/components/privacy/PrivacySection';

const Privacy: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <HeaderSection />
      <PrivacySection />
    </Layout>
  );
};

export default Privacy;
