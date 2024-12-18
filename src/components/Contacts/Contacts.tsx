import { Container, Divider } from '~ui';
import { ContactsList } from './ContactsList';

import style from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section className={style.section}>
      <Container>
        <Divider>Контакты</Divider>
        <ContactsList />
      </Container>
    </section>
  );
};
