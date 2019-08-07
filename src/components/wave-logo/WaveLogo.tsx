import React, { useState, useEffect } from 'react';
import styles from './WaveLogo.module.scss';

type Props = {
  text: string;
  maxFontWeight?: number;
};

const WaveLogo = ({ text, maxFontWeight = 5 }: Props) => {
  const [weightShift, setWeightShift] = useState(0);
  const strLen = text.length;
  const calculateFontWeight = (idx: number) => {
    const period: number = Math.PI * 2;
    const x: number = period / (idx + 1 / strLen);
    return maxFontWeight / 2 * (Math.sin(x + weightShift) + 1) + 5;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWeightShift(weightShift + Math.PI / strLen);
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.wrapper}>
      {text.split('').map((letter, idx) => {
        const letterStyle = {
          textShadow: `gray 5px ${calculateFontWeight(idx)}px 5px`
        };
        return (
          <span style={letterStyle} key={letter + idx}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default WaveLogo;
