import { FC, useState } from 'react';
import { DropdownMenuItem } from './DropdownMenuItem';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as LockIcon } from '../icons/lock.svg';
import { ReactComponent as LogoutIcon } from '../icons/logout.svg';
import { ReactComponent as HistoryIcon } from '../icons/history.svg';
import { ReactComponent as NewsIcon } from '../icons/news.svg';
import { ReactComponent as GlobeIcon } from '../icons/globe.svg';
import { Transition } from './Transition';

export enum DropdownMenuOption {
  main = 'main',
  settings = 'settings',
  theme = 'theme',
}

export const DropdownMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState<DropdownMenuOption>(
    DropdownMenuOption.main,
  );

  const onMenuItemClick = (menu: DropdownMenuOption) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dropdown">
      <Transition
        active={activeMenu === DropdownMenuOption.main}
        className="menu-primary"
      >
        <DropdownMenuItem
          leftIcon={MoonIcon}
          rightIcon={ChevronIcon}
          onClick={() => onMenuItemClick(DropdownMenuOption.theme)}
        >
          Theme
        </DropdownMenuItem>
        <DropdownMenuItem
          leftIcon={CogIcon}
          rightIcon={ChevronIcon}
          onClick={() => onMenuItemClick(DropdownMenuOption.settings)}
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          leftIcon={LogoutIcon}
          onClick={() => onMenuItemClick(DropdownMenuOption.settings)}
        >
          Logout
        </DropdownMenuItem>
      </Transition>

      <Transition active={activeMenu === DropdownMenuOption.settings}>
        <DropdownMenuItem
          leftIcon={ArrowIcon}
          onClick={() => onMenuItemClick(DropdownMenuOption.main)}
        />
        <DropdownMenuItem leftIcon={LockIcon}>Privacy</DropdownMenuItem>
        <DropdownMenuItem leftIcon={HistoryIcon}>Activity</DropdownMenuItem>
        <DropdownMenuItem leftIcon={NewsIcon}>News Feed</DropdownMenuItem>
        <DropdownMenuItem leftIcon={GlobeIcon}>Language</DropdownMenuItem>
      </Transition>
    </div>
  );
};
