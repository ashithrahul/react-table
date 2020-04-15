import React from 'react'
import * as styles from './FirstHorizontalLine.scss';


export default function HorizontalLine() {
    return (
    <div className={styles.FirstWrapper}>
    <div className={styles.headerHorizontalLine}></div>
    <div className={`${styles.headerHorizontalLine} ${styles.headerHorizontalLine1}`}></div>
     <div className={`${styles.headerHorizontalLine} ${styles.headerHorizontalLine2}`}></div>
    </div>
        
    )
}
