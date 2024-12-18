import { memo } from 'react';

import { Option, SelectProps } from '../types';

type ControlProps = Pick<SelectProps, 'isMulti' | 'value' | 'placeholder'>;

// eslint-disable-next-line react/display-name
export const Control = memo(({ isMulti, placeholder, value }: ControlProps) => {
  // const renderSelectedValue = () => {
  //     if (isMulti && Array.isArray(value)) {
  //       return value.map((option) => option.label).join(', ');
  //     }
  //     if (!isMulti && value) {
  //       return (value as Option).label;
  //     }
  //     return placeholder;
  //   };

  if (isMulti && Array.isArray(value)) {
    return <span>{value.map((option) => option.label).join(', ')}</span>;
  }
  if (!isMulti && value) {
    return <span>{(value as Option).label}</span>;
  }

  return <span className="select__placeholder">{placeholder}</span>;
});
