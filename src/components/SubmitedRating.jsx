import React from 'react';
import styles from "./SubmitedRating.module.css"
import { PiStarFill } from 'react-icons/pi';

const SubmitedRating = ({ submitedRating }) => {

    return (
        <div className={styles.container}>
            {/* icon */}
            <PiStarFill className={styles.icon} />

            {/* selected rating title */}
            <h1 className={styles.selectedRatingTitle}>You selected {submitedRating} out of 5</h1>

            {/* title */}
            <h1 className={styles.title}>Thank you!</h1>

            {/* text */}
            <p className={styles.description}>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
}

export default SubmitedRating;
