import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Title } from '~ui/Typography';

type DividerProps = {
  children: string;
  className?: string;
  style?: CSSProperties;
};

export const Divider = ({ children, className, style }: DividerProps) => {
  return (
    <div className={clsx('divider', className)} style={style}>
      <Title variant="h2" className="divider__text" position="center">
        {children}
      </Title>
    </div>
  );
};
