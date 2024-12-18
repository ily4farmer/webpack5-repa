/* eslint-disable react/button-has-type */

import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';

import { Spinner } from '~ui/Common/Spinner/Spinner';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  size?: 'medium' | 'small' | 'large';
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary' | 'ghost';
  icon?: ReactNode;
};

export const Button = ({
  children,
  className,
  isDisabled = false,
  isLoading,
  onClick,
  size = 'medium',
  variant = 'default',
  icon,
  ...props
}: ButtonProps) => (
  <button
    data-testid="button"
    className={clsx(className, 'button', {
      // Варианты кнопки
      button__default: variant === 'default',
      button__disabled: isDisabled,
      button__ghost: variant === 'ghost',
      button__primary: variant === 'primary',

      // Размеры кнопки
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      button__medium: size === 'medium',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      button__large: size === 'large',
      button__small: size === 'small',
    })}
    {...props}
  >
    {icon && <div className="button__icon">{icon}</div>}

    <div
      data-testid="button-loader"
      className={clsx('button__loading', {
        'button__loading-not': !isLoading,
      })}
    >
      <Spinner size="small" />
    </div>
    {children}
  </button>
);
