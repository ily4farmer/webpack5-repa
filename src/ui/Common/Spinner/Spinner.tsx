import clsx from 'clsx';

type SpinnerProps = {
  className?: string;
  size?: 'medium' | 'large' | 'small';
};

export const Spinner = ({ className, size = 'medium' }: SpinnerProps) => (
  <div
    data-testid="spinner"
    className={clsx(className, 'spinner', {
      spinner__default: size === 'medium',
      spinner__large: size === 'large',
      spinner__small: size === 'small',
    })}
  />
);
