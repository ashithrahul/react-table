import React from 'react'
import * as styles from './SecondHorizontal.scss';

export default function StatusHorizontal() {
    return (
        <div className={styles.secondWrapper}>
            <div className={`${styles.headerHorizontalLine} ${styles.headerHorizontalLine3}`}></div>
            <div className={`${styles.headerHorizontalLine} ${styles.headerHorizontalLine4}`}></div>
            <div className={`${styles.headerHorizontalLine} ${styles.headerHorizontalLine5}`}></div>
        </div>
    )
}
