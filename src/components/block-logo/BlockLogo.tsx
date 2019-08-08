import React, { PropsWithChildren } from 'react';
import styles from './BlockLogo.module.scss';

type Props = {
  href: string;
};

const BlockLogo: React.FC<PropsWithChildren<Props>> = props => {
  return (
    <a href={props.href}>
      <div className={styles.wrapper}>
        <div className={styles.backgroundBlock} />
        <div className={styles.backgroundBlockWhite} />
        <div className={styles.children}>
          {props.children && props.children}
        </div>
      </div>
    </a>
  );
};
export default BlockLogo;
