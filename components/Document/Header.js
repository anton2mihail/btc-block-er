import Link from 'next/link';
import React from 'react';

const Header = () => (
  <header id="header" className="alt">
    <Link href="/">
      <a className="logo">
        <strong>Blocker</strong> <span>by Toni L</span>
      </a>
    </Link>
  </header>
);

export default Header;
