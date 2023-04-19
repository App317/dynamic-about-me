import { Link } from 'react-router-dom';
import styles from '../../modules/HomeMenu.module.css';
import { useState } from 'react';

const HomeMenu = () => {
  const [hoverText, setHoverText] = useState(null);
  const texts = ['About me', 'Projects', 'Resume', 'Contact Me'];
  const urls = ['/about', '/projects', '/resume', '/contact'];

  function handleHover(index) {
    setHoverText(index);
    const links = document.querySelectorAll(`.${styles.menuItem}`);
    links.forEach((link, i) => {
      if (i !== index) {
        link.style.opacity = 0.5;
      } else {
        link.style.opacity = 1;
      }
    });
  }
  function handleLeave() {
    setHoverText(null);
    const links = document.querySelectorAll(`.${styles.menuItem}`);
    links.forEach((link) => {
      link.style.opacity = 1;
    });
  }

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
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
