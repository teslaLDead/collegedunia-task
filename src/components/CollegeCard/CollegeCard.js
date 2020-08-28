import React from 'react';
import styles from './CollegeCard.module.css'
import college_image from './college_02.jpg'

export default function CollegeCard ({college}){
    console.log(college)
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                {
                college.promoted && 
                    <div className={styles.promoted}>
                        PROMOTED
                    </div>
                }
                
                <div className={styles.image_container}>
                    <img src={college_image} alt="college " className="fluid-img"/>
                </div>
                <div className={styles.header_rating}>
                    <p><b>{college.rating}</b>/5</p>
                    <p>{college.rating_remarks}</p>
                </div>
                <div className={styles.header_info_container}>
                    <div className={styles.header_info} >
                        
                        <div>
                        {college.tags.map(tag=><span className={styles.header_badge}>{tag.charAt(0).toUpperCase()+tag.slice(1,)}</span>)}
                        </div>
                        <div>
                            <p>{college.ranking}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    {/* info  */}
                    <div>
                        {/* name and rating */}
                        <div>
                            <p className={styles.college_name}>{college.college_name}</p>
                            {/* stars */}
                            <div>

                            </div>
                        </div>

                        {/* location info */}
                        <div className="d-flex my-1">
                            <p>
                               {college.nearest_place[0]}
                            </p>
                            <p className="mx-1 text-light-grey">|</p>
                            <p className={styles.landmark_distance}>
                                {college.nearest_place[1]}
                            </p>
                        </div>
                        {/* location match info */}

                            <p className="mt-2 my-1"><span className="text-green-blue">93% Match :</span> 2.5kms <span className="text-light-grey">from GTB Nagar</span>, 7 Kms <span className="text-light-grey">from Rajiv Chowk</span></p>

                    </div>
                    {/* pricing */}
                    <div className="text-align-right">
                        {/* total amount with discount */}
                        <div className="d-flex align-items-center justify-content-end">
                            <p className={styles.total_amount}>
                            ₹{college.original_fees}
                            </p>
                            {/* disount tag */}
                            <div className={styles.discount_tag}>
                                <p>{college.discount}</p>
                            </div>
                        </div>
                        {/* discounted amount */}
                        <div>
                            <p className={styles.price}>
                            ₹{college.discounted_fees}
                            </p>
                            <p className={styles.price_duration}>{college.fees_cycle}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    {/* coupon and login */}
                    <div className={styles.coupon}>
                        <p>
                        Flat Rs <span className="text-green-blue">2,000</span> off + upto Rs <span className="text-green-blue">500</span> wallet! to avail... <span className="text-blue">LOGIN</span>
                        </p>
                    </div>
                    {/* college perks */}
                    <div className={styles.course_perks}>
                        {college.amenties.map(el=><p>{el}</p>)}
                    </div>

                </div>
            </div>
        </div>

    )
}