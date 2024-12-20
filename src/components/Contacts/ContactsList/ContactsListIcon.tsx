import { ReactNode } from 'react';

import { Flex, Text } from '~ui';

type ContactsListIconProps = {
  icon: ReactNode;
  text: string;
};

export const ContactsListIcon = ({ icon, text }: ContactsListIconProps) => (
  <Flex alignItems="center">
    {icon}
    <Text className="ml-4px">{text}:</Text>
  </Flex>
);
