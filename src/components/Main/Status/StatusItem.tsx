import { Text } from '~ui';

type StatusItemProps = {
  title: string;
  value: string;
};

export const StatusItem = ({ title, value }: StatusItemProps) => (
  <Text>
    <Text isBold>{title}:</Text> {value}
  </Text>
);
