import { Link } from 'react-router-dom';
import styles from '../../modules/HomeMenu.module.css';
import { useState } from 'react';

const HomeMenu = () => {
  const [hoverText, setHoverText] = useState(null);
  const texts = ['About me', 'Projects', 'Resume', 'Contact Me'];
  const urls = ['/about', '/projects', '/resume', '/contact'];

  function handleHover(index) {
    setHoverText(index);
  }
  function handleLeave() {
    setHoverText(null);
  }

  const opacity = hoverText === null ? 1 : 0.5;

  return (
    <div className={styles.menuItems}>
      <div>
        {texts.map((text, index) => (
          <Link
            key={index}
            className={`${styles.menuItem} ${
              index === hoverText || window.location.pathname === urls[index]
                ? 'active'
                : ''
            } ${index === hoverText ? styles.hovered : ''}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave()}
            to={urls[index]}
            style={{ opacity }}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
