import React from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import styles from './CollegeList.module.css'

export default function CollegeList({colleges}){
    console.log(colleges)
    const collegeList = colleges.map((college,index)=> <CollegeCard key={index} college={college}/>)

    return (
        <div>
            <div className={styles.header}>
                <p>Colleges in North India</p>
            </div>
            <div className={styles.list}>
                {collegeList}
            </div>
           
        </div>
    )
}