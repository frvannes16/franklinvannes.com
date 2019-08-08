import React from 'react';
import styles from './Page.module.scss';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
};

const Page: React.FC<PropsWithChildren<Props>> = props => {
  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.title}>
        {props.title}
      </h2>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Page;
