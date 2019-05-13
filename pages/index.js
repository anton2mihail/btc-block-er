import Link from 'next/link';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default () => (
  <Layout>
    <div>
      <Banner />
      <div id="main">
        <section id="one" className="tiles">
          <article style={{ backgroundImage: "url('/static/images/pic01.jpg')" }}>
            <header className="major">
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing">
              <a className="link primary" />
            </Link>
          </article>
          <article style={{ backgroundImage: "url('/static/images/pic02.jpg')" }}>
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary" />
            </Link>
          </article>
          <article style={{ backgroundImage: "url('/static/images/pic03.jpg')" }}>
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/landing">
              <a className="link primary" />
            </Link>
          </article>
          <article style={{ backgroundImage: "url('/static/images/pic04.jpg')" }}>
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/landing">
              <a className="link primary" />
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);
