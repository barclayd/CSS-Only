import { FC } from 'react';
import { SVGIcon } from '../types/icon';

interface DropdownMenuItemProps {
  leftIcon?: SVGIcon;
  rightIcon?: SVGIcon;
  onClick?: () => void;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
}) => {
  return (
    <div className="link menu-item" onClick={onClick}>
      <span className="icon-button">{LeftIcon && <LeftIcon />}</span>
      {children}
      <span className="icon-right">{RightIcon && <RightIcon />}</span>
    </div>
  );
};
