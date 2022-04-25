import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

type PopupLayoutProps = {
  readonly children: ReactNode;
};

const PopupLayout: FunctionComponent<PopupLayoutProps> = ({ children }) => {
  const [initialVisit, setInitialVisit] = useState(false);

  useEffect(() => {
    if (!initialVisit) {
      setTimeout(() => {
        setInitialVisit(true);
      }, 1000);
    }
  }, [initialVisit]);

  return (
    <div
      className={`bg-[rgba(0,0,0,0.4)] fixed w-full h-full top-0 left-0 z-[99999] flex items-center justify-center ${
        initialVisit ? 'opacity-1 visible' : 'opacity-0 hidden'
      } transition-opacity duration-300 ease-in`}
    >
      {children}
    </div>
  );
};

export default PopupLayout;
