import { Flex, List, ListItemProps, Title } from '~ui';

type ContentProps = {
  company: string;
  description: string;
  list: ListItemProps[];
  position: string;
};

export const Content = ({ company, description, list, position }: ContentProps) => (
  <Flex flexDirection="column" className="ml-24px">
    <Title variant="h3">{company}</Title>
    <Title variant="h3">{description}</Title>
    <List title={position} list={list} />
  </Flex>
);
