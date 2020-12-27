import './App.css';
import { NavBar } from './components/NavBar';
import { NavBarItem } from './components/NavBarItem';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { DropdownMenu } from './components/DropdownMenu';

function App() {
  return (
    <NavBar>
      <NavBarItem icon={PlusIcon} />
      <NavBarItem icon={BellIcon} />
      <NavBarItem icon={MessengerIcon} />

      <NavBarItem icon={CaretIcon}>
        <DropdownMenu />
      </NavBarItem>
    </NavBar>
  );
}

export default App;
