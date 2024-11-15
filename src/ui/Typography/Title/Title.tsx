import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

type TitleProps = {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLHeadingElement>;
  position?: 'left' | 'right' | 'center';
  style?: CSSProperties;
  variant?: 'h1' | 'h2' | 'h3';
};

export const Title = ({
  children,
  className,
  position = 'left',
  variant = 'h1',
  ...props
}: TitleProps) => {
  const classTitle = clsx(className, 'title', {
    title__center: position === 'center',
    title__h1: variant === 'h1',
    title__h2: variant === 'h2',

    title__h3: variant === 'h3',
    title__left: position === 'left',
    title__right: position === 'right',
  });

  if (variant === 'h1') {
    return (
      <h1 data-testid="title" className={classTitle} {...props}>
        {children}
      </h1>
    );
  }

  if (variant === 'h2') {
    return (
      <h2 data-testid="title" className={classTitle} {...props}>
        {children}
      </h2>
    );
  }

  if (variant === 'h3') {
    return (
      <h3 data-testid="title" className={classTitle} {...props}>
        {children}
      </h3>
    );
  }

  return null;
};
