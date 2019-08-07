import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './SlantedLogo.module.scss';

type Props = {
  text: string;
  reverse?: boolean;
};

const Logo = ({ text, reverse = false }: Props) => {
  const [height, setHeight] = useState(0);
  const wrapperRef = useRef(null);
  const strLen = text.length;
  const calculateTop = (idx: number): number => {
    if (reverse) {
      return height / strLen * (strLen - idx - 1)
    }
    return height / strLen * idx;
  };

  useLayoutEffect(() => {
    // Track the height of the logo wrapper in hook state.
    if (wrapperRef) {
      setHeight(wrapperRef.current.clientHeight);
    }
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {text.split('').map((letter, idx) => {
        const marginStyle = {
          top: calculateTop(idx) + 'px'
        };
        return (
          <span
            className={styles.letter}
            style={marginStyle}
            key={letter + idx}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default Logo;
