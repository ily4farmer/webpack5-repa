import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type SwitchProps = {
  className?: string;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

export const Switch = ({ className, isActive = false, onClick }: SwitchProps) => (
  <span
    data-testid="switch"
    onClick={onClick}
    className={clsx(className, 'switch', {
      switch__active: isActive,
    })}
  />
);
