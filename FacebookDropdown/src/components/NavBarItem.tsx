import { FC, FunctionComponent, SVGProps } from 'react';

interface NavItemProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const NavBarItem: FC<NavItemProps> = ({ Icon }) => (
  <li className="nav-item">
    <a href="#" className="icon-button">
      <Icon />
    </a>
  </li>
);
