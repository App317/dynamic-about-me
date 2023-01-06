import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IMAGES from '../app/assets/img/IMAGES';
//import UserLoginForm from '../features/user/UserLoginForm';
import styles from '../modules/header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar className={styles.navbar} expand>
      <NavbarBrand className="ms-3" href="/">
        <img className={styles.logo} src={IMAGES.logo} alt="dynamic logo" />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/directory">
              <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
        </Nav>
        {/*<UserLoginForm />*/}
      </Collapse>
    </Navbar>
  );
};

export default Header;
