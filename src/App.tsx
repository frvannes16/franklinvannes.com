import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BlockLogo from './components/block-logo/BlockLogo';
import Menu from './components/menu/Menu';
import Page from './components/page/Page';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <BlockLogo href="/">FRANKLIN</BlockLogo>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>

      <BrowserRouter >
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/resume'} component={Resume}/>
        <Route path={'/links'} component={Home}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
