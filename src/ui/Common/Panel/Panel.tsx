import clsx from 'clsx';
import { ReactNode } from 'react';
import { Title } from '~ui/Typography';

type PanelProps = {
  header: ReactNode;
  children?: ReactNode;
  className?: string;
  classNameHeader?: string;
  classNameContent?: string;
};

export const Panel = ({
  header,
  children,
  className,
  classNameHeader,
  classNameContent,
}: PanelProps) => {
  return (
    <div className={clsx('pannel', className)}>
      <div className={clsx('pannel__header', classNameHeader)}>
        <Title variant="h3" position="left">
          {header}
        </Title>
      </div>
      <div className={clsx('pannel__content', classNameContent)}>{children}</div>
    </div>
  );
};
