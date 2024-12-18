import { Dispatch, memo, SetStateAction } from 'react';

import { SelectProps } from '../../types';
import { MenuItem } from './MenuItem';

type MenuProps = Pick<SelectProps, 'options' | 'isMulti' | 'value' | 'onChange'> & {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Menu = memo(({ options, ...props }: MenuProps) => (
  <ul className="select__menu">
    {options.map((option) => (
      <MenuItem key={option.value} {...props} option={option} />
    ))}
  </ul>
));
