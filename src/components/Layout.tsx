import { FunctionComponent, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from './Footer';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
