import Link from 'next/link';
import { List, ListItemProps, PhoneIcon } from '~ui';

const statusInfo: ListItemProps[] = [
  {
    icon: <PhoneIcon />,
    key: 1,
    value: <Link href="tel:+79774101823">+7 (977) 410-18-23</Link>,
  },
];

export const ContactsList = () => {
  return <List list={statusInfo} className="mt-10px" />;
};
