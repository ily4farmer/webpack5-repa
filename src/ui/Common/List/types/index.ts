import { CSSProperties, Key, ReactNode } from 'react';

export type ListItemProps = {
  icon?: ReactNode;
  key: Key;
  value: ReactNode;
};

export type ListProps = {
  isBordered?: boolean;
  list: ListItemProps[];
  title?: string;
  className?: string;
  style?: CSSProperties;
};
