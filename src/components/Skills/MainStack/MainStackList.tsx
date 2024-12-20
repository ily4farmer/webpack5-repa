import { ListItemProps, Text } from '~ui';

export const stackInfo: ListItemProps[] = [
  {
    icon: '-',
    key: 1,
    value: (
      <Text>Вёрстка: HTML&nbsp;/ CSS&nbsp;/ SCSS&nbsp;/ CSS Modules&nbsp;/ Styled-Components</Text>
    ),
  },
  {
    icon: '-',
    key: 2,
    value: <Text>Языки: JavaScript (JS)&nbsp;/ TypeScript (TS)</Text>,
  },
  {
    icon: '-',
    key: 3,
    value: (
      <Text>
        Фреймворки и&nbsp;их&nbsp;экосистема: Next.js&nbsp;/ React (Redux Toolkit&nbsp;/ RTK
        Query&nbsp;/ React-Hook-Form / Zod)
      </Text>
    ),
  },
  {
    icon: '-',
    key: 4,
    value: <Text>Сборщики: Webpack</Text>,
  },
  {
    icon: '-',
    key: 5,
    value: <Text>Системы контроля версий: Git</Text>,
  },
  {
    icon: '-',
    key: 6,
    value: (
      <Text>
        Прочее: Storybook&nbsp;/ Сonfluence&nbsp;/ Jira&nbsp;/ Bitbucked&nbsp;/ GitLab&nbsp;/ GitHub
      </Text>
    ),
  },
  {
    icon: '-',
    key: 6,
    value: (
      <Text>
        Дополнительно: Есть небольшой опыт серверной разработки Node.js, участвовал в&nbsp;создании
        BFF (Backend for Frontend) на&nbsp;Nest.js.
      </Text>
    ),
  },
];
