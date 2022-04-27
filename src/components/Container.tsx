import { FunctionComponent, ReactNode } from 'react';

type ContainerProps = {
  readonly children: ReactNode;
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
