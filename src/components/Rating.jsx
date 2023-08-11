import React, { useState } from 'react';
import styles from "./Rating.module.css"
import { PiStarFill } from 'react-icons/pi';
import SubmitedRating from './SubmitedRating';

const Rating = () => {
    const [selectedRating, setSelectedRating] = useState('')
    const [submited, setSubmited] = useState(false)

    const handleRating = (rating) => {
        setSelectedRating(rating)
    }

    const handleSubmit = () => {
        setSubmited(true);
    };

    return (
        <div className={styles.container}>
            {!submited ? ( // Mostra o componente Rating enquanto submited é false
                <>
                    {/* icon */}
                    <PiStarFill className={styles.icon} />

                    {/* title */}
                    <h1 className={styles.title}>How did we do?</h1>

                    {/* text */}
                    <p className={styles.description}>
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering!
                    </p>

                    {/* rating buttons */}
                    <div className={styles.ratingButtonContainer}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => handleRating(rating)}
                                className={styles.ratingButtonButton}
                            >
                                {rating}
                            </button>
                        ))}
                    </div>

                    {/* submit button */}
                    <button
                        disabled={selectedRating === ''}
                        onClick={handleSubmit}
                        className={styles.submitButton}
                        type='button'
                    >
                        SUBMIT
                    </button>
                </>
            ) : (
                <SubmitedRating submitedRating={selectedRating} />
            )}
        </div>
    )
}

export default Rating;
