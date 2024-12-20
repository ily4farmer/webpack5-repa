import {
  CitizenshipIcon,
  FlagIcon,
  HomeIcon,
  List,
  ListItemProps,
  LocationIcon,
  ScheduleIcon,
} from '~ui';

import { StatusItem } from './StatusItem';

const statusInfo: ListItemProps[] = [
  {
    icon: <LocationIcon />,
    key: 6,
    value: <StatusItem title="Полное имя" value="Лесников Алексей Кириллович" />,
  },
  {
    icon: <LocationIcon />,
    key: 5,
    value: <StatusItem title="Возраст" value="24 года" />,
  },
  {
    icon: <LocationIcon />,
    key: 1,
    value: <StatusItem title="Место проживания" value="Россия г. Москва" />,
  },
  {
    icon: <FlagIcon />,
    key: 2,
    value: <StatusItem title="Гражданство" value="РФ (Россия)" />,
  },
  {
    icon: <ScheduleIcon />,
    key: 3,
    value: (
      <StatusItem title="График работы" value="Полный день, гибкий график, удаленная работа" />
    ),
  },
  {
    icon: <HomeIcon />,
    key: 4,
    value: <StatusItem title="Переезд" value="Не готов к переезду, готов к командировкам" />,
  },
  {
    icon: <CitizenshipIcon />,
    key: 5,
    value: <StatusItem title="Желаемая зарплата" value="По договоренности" />,
  },
];

export const Status = () => <List list={statusInfo} className="mt-10px" />;
