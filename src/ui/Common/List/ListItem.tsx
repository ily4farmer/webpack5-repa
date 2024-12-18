import clsx from 'clsx';

import { Flex } from '../../Layout/Flex';
import { ListItemProps } from './types';

export const ListItem = ({ icon, isBordered, value }: ListItemProps & { isBordered: boolean }) => (
  <li
    className={clsx('list__item', {
      'list__item--bordered': isBordered,
    })}
  >
    <Flex className="list__icon">{icon}</Flex>

    <div>{value}</div>
  </li>
);
