import React from 'react';
import * as styles from './ThirdHorizontal.scss';

export default function ThirdHorizontal() {
    return (
        <div className={styles.ThirdWrapper}>
           <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine1} ${styles.visitCommnstyle}`}></div>
              <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine2} ${styles.visitCommnstyle}`}></div>
              <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine3} ${styles.visitCommnstyle}`}></div> 
        </div>
    )
}
