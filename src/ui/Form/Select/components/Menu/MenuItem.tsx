import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

import { Option } from '../../types';

type MenuItemProps = Pick<SelectProps, 'isMulti' | 'value' | 'onChange'> & {
  option: Option;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuItem = ({ isMulti, onChange, option, setIsOpen, value }: MenuItemProps) => {
  const handleSelectOption = (option: Option) => {
    if (isMulti) {
      const selectedArray = Array.isArray(value) ? [...value] : [];
      const isSelected = selectedArray.some((selected) => selected.value === option.value);

      const newValue = isSelected
        ? selectedArray.filter((selected) => selected.value !== option.value)
        : [...selectedArray, option];

      onChange(newValue as T); // Приведение к типу T
    } else {
      onChange(option as T); // Приведение к типу T
      setIsOpen(false);
    }
  };

  const changeValuehandler = handleSelectOption(option);

  const className = clsx('select__option', {
    'select__option--selected':
      (isMulti && Array.isArray(value) && value.some((val) => val.value === option.value)) ||
      (!isMulti && value && (value as Option).value === option.value),
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={className} onClick={changeValuehandler}>
      {option.label}
    </li>
  );
};
