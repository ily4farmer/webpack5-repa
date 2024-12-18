import clsx from 'clsx';

type IndicatorProps = {
  isOpen: boolean;
};

export const Indicator = ({ isOpen }: IndicatorProps) => (
  <span
    className={clsx('select__indicator', {
      'select__indicator--open ': isOpen,
    })}
  >
    c
  </span>
);
