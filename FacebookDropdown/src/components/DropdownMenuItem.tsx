import { FC } from 'react';
import { SVGIcon } from '../types/icon';

interface DropdownMenuItemProps {
  leftIcon?: SVGIcon;
  rightIcon?: SVGIcon;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{LeftIcon && <LeftIcon />}</span>
      {children}
      <span className="icon-right">{RightIcon && <RightIcon />}</span>
    </a>
  );
};
