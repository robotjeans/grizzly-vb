import type { ReactNode } from 'react';

type ContainerProps = {
  readonly children: ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`w-full max-w-full md:max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
