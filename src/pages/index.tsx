import { NextPage } from 'next';
import SEO from '@/components/common/Seo';
import DefaultLayout from '@/components/ui/DefaultLayout';
import Hero from '@/components/home/Hero';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO />
      <Hero />
    </DefaultLayout>
  );
};

export default Home;
