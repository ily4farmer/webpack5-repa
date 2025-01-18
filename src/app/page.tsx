// eslint-disable-next-line simple-import-sort/imports
import { About, Experience, Contacts as Footer, Header, Main, Skills } from '~components';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Main />
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
