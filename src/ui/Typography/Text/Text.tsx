import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
  className?: string;
  isBold?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement> | MouseEventHandler<HTMLParagraphElement>;
  position?: 'left' | 'right' | 'center';
  color?: 'white' | 'primary';
  size?: 'medium' | 'small';
  style?: CSSProperties;
  variant?: 'text' | 'paragraph';
};

export const Text = ({
  children,
  className,
  isBold = false,
  position = 'left',
  size = 'medium',
  variant = 'text',
  color = 'white',
  ...props
}: TextProps) => {
  const classTitle = clsx(className, 'text', {
    text__bold: isBold,
    text__center: position === 'center',
    text__left: position === 'left',

    text__primary: color === 'primary',

    text__right: position === 'right',

    text__small: size === 'small',
  });

  if (variant === 'text') {
    return (
      <span data-testid="text" className={classTitle} {...props}>
        {children}
      </span>
    );
  }

  return (
    <p data-testid="text" className={classTitle} {...props}>
      {children}
    </p>
  );
};
