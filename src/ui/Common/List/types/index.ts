import { CSSProperties, Key, ReactNode } from 'react';

export type ListItemProps = {
  icon?: ReactNode;
  key: Key;
  value: ReactNode;
};

export type ListProps = {
  className?: string;
  isBordered?: boolean;
  list: ListItemProps[];
  style?: CSSProperties;
  title?: string;
};
