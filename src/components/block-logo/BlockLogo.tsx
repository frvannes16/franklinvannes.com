import React from 'react';
import styles from './BlockLogo.module.scss';

const BlockLogo: React.FC = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundBlock} />
      <div className={styles.children}>
        {props.children && props.children}
      </div>
    </div>
  );
};
export default BlockLogo;
