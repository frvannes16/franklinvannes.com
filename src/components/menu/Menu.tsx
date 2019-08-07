import React from 'react';
import styles from './Menu.module.scss';

type MenuItem = string;

const menuItems: Array<MenuItem> = ['Home', 'About', 'Resume', 'Links'];

const Menu: React.FC = () =>
  <div>
    {menuItems.map(title =>
      <div className={styles.menuItem}>
        {title}
      </div>
    )}
  </div>;

export default Menu;
