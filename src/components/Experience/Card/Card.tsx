import { Flex } from '~ui';

import { Content } from './Content';
import { PeriodWork } from './PeriodWork';

export const Card = (props) => (
  <Flex className="mt-24px">
    <PeriodWork />
    <Content {...props} />
  </Flex>
);
