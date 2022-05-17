import React from "react";
import styles from './list.module.css'

let OperatingSystem = ()=>{
    return <ul style={{fontSize:'20px', fontWeight:'bold'}}>Mobile Opertaing System 
        <li className={styles.list}>Android</li>
        <li className={styles.list}>BlackBerry</li>
        <li className={styles.list}>Iphone</li>
        <li className={styles.list}>Windows Phone</li>
    </ul>
}

export default OperatingSystem;