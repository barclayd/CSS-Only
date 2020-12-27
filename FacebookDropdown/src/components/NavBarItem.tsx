import { FC, useState } from 'react';
import { SVGIcon } from '../types/icon';

interface NavItemProps {
  icon: SVGIcon;
}

export const NavBarItem: FC<NavItemProps> = ({ icon: Icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        <Icon />
      </div>
      {open && children}
    </li>
  );
};
