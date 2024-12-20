import { Container, Divider, Text } from '~ui';

import style from './About.module.scss';
import { Education } from './Education';
import { Status } from './Status';

export const About = () => (
  <section className={style.section}>
    <Container>
      <Divider>О Себе</Divider>

      <Text variant="paragraph" className="mt-24px">
        Меня зовут Алексей, увлекаюсь программированием со&nbsp;школы, первый сайт сделал еще
        в&nbsp;2018, а за&nbsp;деньги&nbsp;&mdash; в&nbsp;2019. С&nbsp;2021 года на&nbsp;постоянной
        основе занимаюсь коммерческой Frontend (React) разработкой, а&nbsp;так&nbsp;же активно
        занимаюсь самообразованием и&nbsp;стремлюсь развиваться в профессии.
      </Text>

      <Status />
      <Education />
    </Container>
  </section>
);
