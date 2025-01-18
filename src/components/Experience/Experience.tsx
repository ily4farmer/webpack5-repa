import { Container, Divider, Text } from '~ui';

import { Card } from './Card';
import styles from './Experience.module.scss';

const listCards = [
  {
    company: 'Сбер',
    description: 'Работа в нескольких scrum-командах в роли Frontend разработчика:',
    list: [
      { icon: '-', key: 1, value: <Text>параллельная работа над несколькими проектами</Text> },
      { icon: '-', key: 2, value: <Text>разработка новой функциональности</Text> },
      { icon: '-', key: 3, value: <Text>проектирование архитектурных решений</Text> },
      { icon: '-', key: 4, value: <Text>написание внутренних компонентов для разработчиков</Text> },
      { icon: '-', key: 5, value: <Text>поддержка проектов</Text> },
      { icon: '-', key: 6, value: <Text>проведение технических интервью с кандидатами</Text> },
      { icon: '-', key: 7, value: <Text>проведение code-review</Text> },
      { icon: '-', key: 8, value: <Text>оценка задач и сроков их реализации</Text> },
    ],
    position: 'Frontend-разработчик',
  },
  {
    company: 'GotBit',
    description: 'Работа в команде в роли Frontend разработчика:',
    list: [
      { icon: '-', key: 1, value: <Text>разработка внутренней CRM системы</Text> },
      { icon: '-', key: 2, value: <Text>реализация новых фич</Text> },
      { icon: '-', key: 3, value: <Text>поддержка проекта</Text> },
      { icon: '-', key: 4, value: <Text>проведение code-review</Text> },
      { icon: '-', key: 5, value: <Text>серверная разработка Node.js</Text> },
      { icon: '-', key: 6, value: <Text>оценка задач и сроков их реализации</Text> },
    ],
    position: 'Frontend-разработчик (React)',
  },
];

export const Experience = () => (
  <section className={styles.section}>
    <Container>
      <Divider>Опыт работы (3 года 6 месяцев)</Divider>

      <Text variant="paragraph" className="mt-24px">
        Меня зовут Алексей, увлекаюсь программированием со&nbsp;школы, первый сайт сделал еще
        в&nbsp;2018, а за&nbsp;деньги&nbsp;&mdash; в&nbsp;2019. С&nbsp;2021 года на&nbsp;постоянной
        основе занимаюсь коммерческой Frontend (React) разработкой, а&nbsp;так&nbsp;же активно
        занимаюсь самообразованием и&nbsp;стремлюсь развиваться в профессии.
      </Text>

      {listCards.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </Container>
  </section>
);
