import React from 'react';
import BlockLogo from './components/block-logo/BlockLogo';
import Menu from './components/menu/Menu';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <BlockLogo>FRANKLIN</BlockLogo>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
    </div>
  );
};

export default App;
