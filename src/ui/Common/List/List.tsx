import { Text } from '~ui/Typography';

import clsx from 'clsx';
import { ListItem } from './ListItem';
import { ListProps } from './types';

export const List = ({ isBordered = false, list, title, className, style }: ListProps) => (
  <ul className={clsx('list', className)} style={style}>
    {title && <Text>{title}</Text>}

    {list.map(({ key, ...el }) => (
      <ListItem key={key} {...el} isBordered={isBordered} />
    ))}
  </ul>
);
