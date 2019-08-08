import React from 'react';
import styles from './Menu.module.scss';

type MenuItem = {
  text: string;
  path: string;
};

const menuItems: Array<MenuItem> = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Resume', path: '/resume' },
  { text: 'Links', path: '/links' }
];

const Menu: React.FC = () =>
  <div>
    {menuItems.map(title =>
      <a href={title.path}>
        <div className={styles.menuItem}>
          {title.text}
        </div>
      </a>
    )}
  </div>;

export default Menu;
