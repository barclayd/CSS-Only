import { FC, useState } from 'react';
import { DropdownMenuItem } from './DropdownMenuItem';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { CSSTransition } from 'react-transition-group';

export enum DropdownMenuOption {
  main = 'main',
  settings = 'settings',
  help = 'help',
}

export const DropdownMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState<DropdownMenuOption>(
    DropdownMenuOption.main,
  );

  const onMenuItemClick = (menu: DropdownMenuOption) => {
    console.log('called');
    setActiveMenu(menu);
    console.log(activeMenu);
  };

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === DropdownMenuOption.main}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownMenuItem
            onClick={() => onMenuItemClick(DropdownMenuOption.help)}
          >
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            leftIcon={CogIcon}
            rightIcon={ChevronIcon}
            onClick={() => onMenuItemClick(DropdownMenuOption.settings)}
          >
            Settings
          </DropdownMenuItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === DropdownMenuOption.settings}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownMenuItem
            leftIcon={ArrowIcon}
            onClick={() => onMenuItemClick(DropdownMenuOption.main)}
          />
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </div>
      </CSSTransition>
    </div>
  );
};
