import { Container, Text, Title } from '~ui';

import style from './Main.module.scss';

export const Main = () => (
  <section>
    <Container>
      <Text variant="paragraph" position="center" className={style.text}>
        Привет 👋, я
      </Text>
      <Title variant="h1">Frontend React разработчик.</Title>

      <Text variant="paragraph" position="center" className={style.text}>
        Более 3-х лет занимаюсь фронтенд разработкой. Работаю в&nbsp;продуктовых компаниях. <br />
        Запускаю фронтенд приложения и&nbsp;поддерживаю их&nbsp;как в&nbsp;одиночку, так
        и&nbsp;в&nbsp;agile командах.
      </Text>
    </Container>
  </section>
);
