import { Flex, List, ListItemProps, Text, Title } from '~ui';

export const educationInfo: ListItemProps[] = [
  {
    icon: <Text>- с 2024 по&nbsp;2027 -</Text>,
    key: 1,
    value: <Text>Московский технологический институт (МТИ), Москва</Text>,
  },
  {
    icon: <Text>- с&nbsp;2018 по&nbsp;2021 -</Text>,
    key: 2,
    value: (
      <Text>
        Колледж автоматизации и&nbsp;информационных технологий &#8470;&nbsp;20&nbsp;(КАИТ20), Москва
      </Text>
    ),
  },
];

export const Education = () => (
  <Flex flexDirection="column" className="mt-24px">
    <Title variant="h3">Образование:</Title>

    <List list={educationInfo} />
  </Flex>
);
