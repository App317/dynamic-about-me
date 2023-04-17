import { Link } from 'react-router-dom';
import styles from '../../modules/HomeMenu.module.css';
import { useState } from 'react';

const HomeMenu = () => {
  const [menuFade, setMenuFade] = useState(false);

  return (
    <div className={styles.menu}>
      <div className={styles.menuItems}>
        <div>
          <Link
            style={{ opacity: 0.3 }}
            onMouseEnter={() => setMenuFade(!menuFade)}
            className={styles.menuItem}
            to="/about"
          >
            <h1>About Me</h1>
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/projects">
            <h1>Projects</h1>
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/resume">
            <h1>Resume</h1>
          </Link>
          <Link className={styles.menuItem} to="/contact">
            <h1>Contact me</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
