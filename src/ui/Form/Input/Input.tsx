import clsx from 'clsx';
import { ChangeEventHandler, CSSProperties, FocusEventHandler } from 'react';

import { Spinner } from '~ui/Common';

type InputProps = {
  className?: string;
  isDisabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  label?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  style?: CSSProperties;
  type?: 'text' | 'number' | 'password' | 'email';
  value?: string | number;
};

export const Input = ({
  className,
  isDisabled = false,
  isError = false,
  isLoading = false,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  style,
  type,
  value,
}: InputProps) => (
  <div className="input__block" data-testid="input">
    {label && (
      <span className="input__label" data-testid="input-label">
        {label}
      </span>
    )}
    <div
      data-testid="input-wrapper"
      className={clsx(className, 'input__wrapper', {
        'input__wrapper-error': isError,
      })}
      style={style}
    >
      <div
        data-testid="input-disabled"
        className={clsx({
          'input__wrapper-disabled': isDisabled,
        })}
      />
      <input
        data-testid="input-element"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        value={value}
        className="input"
        placeholder={placeholder}
      />
      <Spinner
        data-testid="input-spinner"
        size="medium"
        className={clsx({
          'input__not-loading': !isLoading,
        })}
      />
    </div>
  </div>
);
