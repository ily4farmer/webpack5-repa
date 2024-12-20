import clsx from 'clsx';
import { ReactNode } from 'react';

import { Title } from '~ui/Typography';

type PanelProps = {
  children?: ReactNode;
  className?: string;
  classNameContent?: string;
  classNameHeader?: string;
  header: ReactNode;
};

export const Panel = ({
  children,
  className,
  classNameContent,
  classNameHeader,
  header,
}: PanelProps) => (
  <div className={clsx('pannel', className)}>
    <div className={clsx('pannel__header', classNameHeader)}>
      <Title variant="h3" position="left">
        {header}
      </Title>
    </div>
    <div className={clsx('pannel__content', classNameContent)}>{children}</div>
  </div>
);
