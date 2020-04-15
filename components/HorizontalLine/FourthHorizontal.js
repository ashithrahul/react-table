import React from 'react';
import * as styles from './FourthHorizontal.scss';

export default function FourthHorizontal() {
    return (
        <div>
         <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine1}`}></div>
        <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine2}`}></div>
        <div className={`${styles.statusCommonStyle} ${styles.statusHorizontalLine3}`}></div> 
        </div>
    )
}
