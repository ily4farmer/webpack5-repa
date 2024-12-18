'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Control, Indicator, Menu } from './components';
import { Option, SelectProps } from './types';

export const Select = <T extends Option | Option[] | null>({
  className,
  isMulti = false,
  onChange,
  options,
  placeholder = 'Select...',
  style,
  value,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={clsx('select', className)} style={style}>
      <div className="select__control" onClick={toggleDropdown}>
        <Control value={value} placeholder={placeholder} isMulti={isMulti} />
        <Indicator isOpen={isOpen} />
      </div>
      {isOpen && (
        <Menu
          onChange={onChange}
          isMulti={isMulti}
          options={options}
          value={value}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
