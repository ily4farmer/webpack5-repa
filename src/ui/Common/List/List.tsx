import clsx from 'clsx';

import { Text } from '~ui/Typography';

import { ListItem } from './ListItem';
import { ListProps } from './types';

export const List = ({ className, isBordered = false, list, style, title }: ListProps) => (
  <ul className={clsx('list', className)} style={style}>
    {title && <Text>{title}</Text>}

    {list.map(({ key, ...el }) => (
      <ListItem key={key} {...el} isBordered={isBordered} />
    ))}
  </ul>
);
