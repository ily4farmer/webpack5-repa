import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <div className={clsx('container', className)} style={style}>
      {children}
    </div>
  );
};
