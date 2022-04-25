import { ReactNode, useState } from 'react';
import Header from '@/components/common/Header';
import Container from '@/components/ui/Container';

type DefaultLayoutProps = {
  readonly children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen">
      <Header />
      <main role="main" id="content">
        <Container className="pt-0">
          <div className="relative">{children}</div>
        </Container>
      </main>
    </div>
  );
};

export default DefaultLayout;
