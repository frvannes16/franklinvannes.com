import React from 'react';
import BlockLogo from './components/block-logo/BlockLogo';
import Menu from './components/menu/Menu';
import Page from './components/page/Page';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <BlockLogo>FRANKLIN</BlockLogo>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <Page title="Home"><p>Welcome to franklinvannes.com</p></Page>
    </div>
  );
};

export default App;
