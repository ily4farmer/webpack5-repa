export type SelectProps<T extends Option | Option[] | null> = {
  className?: string;
  // Тип onChange подстраивается под значение
  isMulti?: boolean;
  // Тип значения зависит от использования
  onChange: (value: T) => void;
  options: Option[];
  placeholder?: string;
  style?: React.CSSProperties;
  value: T; // Флаг для множественного выбора
};

export type Option = {
  label: string;
  value: string;
};

export type MultiOptions = Option[];
