import Link from 'next/link';

import {
  GitHubIcon,
  List,
  ListItemProps,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '~ui';

import { ContactsListIcon } from './ContactsListIcon';

const contactsInfo: ListItemProps[] = [
  {
    icon: <ContactsListIcon text="Мой телефон" icon={<PhoneIcon />} />,
    key: 1,
    value: (
      <Link target="_blank" href="tel:+79774101823">
        +7 (977) 410-18-23
      </Link>
    ),
  },
  {
    icon: <ContactsListIcon text="Моя почта" icon={<MailIcon />} />,
    key: 2,
    value: (
      <Link target="_blank" href="mailto:lesnikov1604@gmail.com">
        lesnikov1604@gmail.com
      </Link>
    ),
  },
  {
    icon: <ContactsListIcon text="Мой Telegram" icon={<TelegramIcon />} />,
    key: 3,
    value: (
      <Link target="_blank" href="https://t.me/alexey_lesnikov1604">
        @alexey_lesnikov1604
      </Link>
    ),
  },
  {
    icon: <ContactsListIcon text="Мой WhatsApp" icon={<WhatsAppIcon />} />,
    key: 4,
    value: (
      <Link target="_blank" href="https://wa.me/79774101823">
        +7 (977) 410-18-23
      </Link>
    ),
  },
  {
    icon: <ContactsListIcon text="Мой GitHub" icon={<GitHubIcon />} />,
    key: 5,
    value: (
      <Link target="_blank" href="https://wa.me/79774101823">
        +7 (977) 410-18-23
      </Link>
    ),
  },
];

export const ContactsList = () => <List list={contactsInfo} className="mt-10px" />;
