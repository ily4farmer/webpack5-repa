import { Container, Divider } from '~ui';

import style from './Contacts.module.scss';
import { ContactsList } from './ContactsList';

export const Contacts = () => (
  <footer className={style.footer}>
    <Container>
      <Divider>Контакты</Divider>
      <ContactsList />
    </Container>
  </footer>
);
