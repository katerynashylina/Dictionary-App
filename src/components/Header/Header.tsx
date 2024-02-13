import logo from '../../icons/logo.svg';
import { Selection } from '../Selection/Selection';
import { Switch } from '../Switch/Switch';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <div className="header__active">
        <Selection />

        <Switch />
      </div>
    </header>
  );
}