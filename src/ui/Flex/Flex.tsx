import clsx from 'clsx';
import { ReactNode } from 'react';

type FlexProps = {
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  children?: ReactNode;
  className?: string;
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

export const Flex = ({
  alignItems,
  children,
  className,
  flexDirection,
  justifyContent,
}: FlexProps) => (
  <div
    className={clsx(className, 'flex', {
      'flex__ai-center': alignItems === 'center',
      'flex__ai-end': alignItems === 'flex-end',
      'flex__ai-start': alignItems === 'flex-start',

      'flex__fd-column': flexDirection === 'column',
      'flex__fd-column-reverse': flexDirection === 'column-reverse',
      'flex__fd-row': flexDirection === 'row',
      'flex__fd-row-reverse': flexDirection === 'row-reverse',
      'flex__jc-center': justifyContent === 'center',
      'flex__jc-flex-end': justifyContent === 'flex-end',
      'flex__jc-flex-start': justifyContent === 'flex-start',

      'flex__jc-space-around': justifyContent === 'space-around',
      'flex__jc-space-between': justifyContent === 'space-between',
      'flex__jc-space-evenly': justifyContent === 'space-evenly',
    })}
  >
    {children}
  </div>
);
