import { FC } from 'react';

export const NavBar: FC = ({ children }) => (
  <nav className="navbar">
    <ul className="navbar-nav">{children}</ul>
  </nav>
);
