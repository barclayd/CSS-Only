import { FC } from 'react';
import { DropdownMenuItem } from './DropdownMenuItem';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';

export const DropdownMenu: FC = () => {
  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem leftIcon={CogIcon} rightIcon={ChevronIcon} />
      </div>
    </div>
  );
};
