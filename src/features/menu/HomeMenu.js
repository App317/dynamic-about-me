import { Link } from 'react-router-dom';
import styles from '../../modules/HomeMenu.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleHover, handleLeave } from './homeMenuSlice';

const HomeMenu = () => {
  const hoverText = useSelector((state) => state.homeMenu.hoverText);
  const opacities = useSelector((state) => state.homeMenu.opacity);
  const dispatch = useDispatch();

  const texts = ['About me', 'Projects', 'Resume', 'Contact Me'];
  const urls = ['/about', '/projects', '/resume', '/contact'];

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
            onMouseEnter={() => dispatch(handleHover(index))}
            onMouseLeave={() => dispatch(handleLeave())}
            to={urls[index]}
            style={{ opacity: opacities[index] }}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
