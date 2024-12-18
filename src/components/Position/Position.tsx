import { Button, Container, Flex, MailIcon, Text } from '~ui';

import { Photo } from './Photo';
import style from './Position.module.scss';
import { Status } from './Status';

export const Position = () => (
  <section>
    <Container className={style.container}>
      <Flex flexDirection="column">
        <Photo />

        <Text variant="paragraph" className={style.text}>
          Привет 👋.
          <br />
          Меня зовут Алексей, я&nbsp;более 3-х лет занимаюсь фронтенд разработкой. Работаю
          в&nbsp;продуктовых компаниях. <br />
          Запускаю фронтенд приложения и&nbsp;поддерживаю их&nbsp;как в&nbsp;одиночку, так
          и&nbsp;в&nbsp;agile командах.
        </Text>
      </Flex>

      <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Status />

        <Button className={style.button} icon={<MailIcon />}>
          Написать мне
        </Button>
      </Flex>
    </Container>
  </section>
);
