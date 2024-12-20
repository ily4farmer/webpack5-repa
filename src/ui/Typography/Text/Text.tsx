import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
  className?: string;
  color?: 'white' | 'primary';
  isBold?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement> | MouseEventHandler<HTMLParagraphElement>;
  position?: 'left' | 'right' | 'center';
  size?: 'medium' | 'small';
  style?: CSSProperties;
  variant?: 'text' | 'paragraph';
};

export const Text = ({
  children,
  className,
  color = 'white',
  isBold = false,
  position = 'left',
  size = 'medium',
  variant = 'text',
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
