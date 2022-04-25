import { ReactNode, useState } from 'react';
import Header from '@/components/common/Header';
import Container from '@/components/ui/Container';
import PopupLayout from './PopupLayout';

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
      <PopupLayout>
        <div className="flex flex-col w-[624px] p-[64px 108px] bg-white relative h-[518px] z-[999999]"></div>
      </PopupLayout>
    </div>
  );
};

export default DefaultLayout;
