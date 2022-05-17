
import React from "react";
import styles from './list.module.css'

let ManufacuresCompany = ()=>{
    return <ul style={{fontSize:'20px', fontWeight:'bold'}}>Mobile Manufactures
        <li className={styles.list}>Samsung</li>
        <li className={styles.list}>HTC</li>
        <li className={styles.list}>MicroMax</li>
        <li className={styles.list}>Apple</li>
    </ul>
}

export default ManufacuresCompany;