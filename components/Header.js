import Link from 'next/link';

const Header = props => (
  <header id="header" className="alt">
    <Link href="/">
      <a className="logo">
        <strong>Blocker</strong>
        {' '}
        <span>by Toni L</span>
      </a>
    </Link>
  </header>
);

export default Header;
