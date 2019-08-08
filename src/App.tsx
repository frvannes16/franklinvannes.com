import React from 'react';
import BlockLogo from './components/block-logo/BlockLogo';
import Menu from './components/menu/Menu';
import Page from './components/page/Page';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <BlockLogo href="/">FRANKLIN</BlockLogo>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <Page title="Home">
        <p>Welcome to franklinvannes.com</p>
        <p>
          This site is created using React, TypeScript, Sass, and more! It's
          full of some dandy features, so feel free to take a look around
        </p>
      </Page>
    </div>
  );
};

export default App;
