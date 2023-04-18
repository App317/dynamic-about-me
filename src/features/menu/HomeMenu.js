import { Link } from 'react-router-dom';
import styles from '../../modules/HomeMenu.module.css';
import { useState } from 'react';

const HomeMenu = () => {
  const fade = { opacity: 0.3 };
  const unfade = { opacity: 1.0 };
  const [textFade, setTextFade] = useState(unfade);
  const texts = ['about', 'projects', 'resume', 'contact'];

  return (
    <div className={styles.menu}>
      <div className={styles.menuItems}>
        <div>
          <Link
            style={textFade}
            onMouseOver={() => setTextFade(fade)}
            onMouseOut={() => setTextFade(unfade)}
            className={styles.menuItem}
            to="/about"
          >
            <h1>About Me</h1>
          </Link>
        </div>
        <div>
          <Link
            style={textFade}
            onMouseOver={() => setTextFade(unfade)}
            onMouseOut={() => setTextFade(fade)}
            className={styles.menuItem}
            to="/projects"
          >
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
