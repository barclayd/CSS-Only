import './App.css';
import { NavBar } from './components/NavBar';
import { NavBarItem } from './components/NavBarItem';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';

function App() {
  return (
    <NavBar>
      <NavBarItem Icon={PlusIcon} />
      <NavBarItem Icon={BellIcon} />
      <NavBarItem Icon={MessengerIcon} />
    </NavBar>
  );
}

export default App;
