import clsx from 'clsx';

type SpinnerProps = {
  size?: 'medium' | 'large' | 'small';
};

export const Spinner = ({ size = 'medium' }: SpinnerProps) => (
  <div
    className={clsx('spinner', {
      spinner__default: size === 'medium',
      spinner__large: size === 'large',
      spinner__small: size === 'small',
    })}
  />
);
