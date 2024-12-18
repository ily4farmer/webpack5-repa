import { Container, Text } from '~ui';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <nav className={style.navigation}>
          <Text className={style.link}>Главная</Text>
          <Text className={style.link}>О себе</Text>
          <Text className={style.link}>Контакты</Text>
          <Text className={style.link}>Навыки</Text>
          <Text className={style.link}>Опыт работы</Text>
        </nav>
      </Container>
    </header>
  );
};
