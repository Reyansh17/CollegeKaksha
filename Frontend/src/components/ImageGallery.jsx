import React from 'react';
import styles from './ImageGallery.module.css';

function ImageGallery() {
    return (
        <div className={styles.imageGallery}>
        <div className={styles.imageGallery}>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img1.png" alt="Feature 1" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img1.png" alt="Feature 1" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img4.png" alt="Feature 2" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img1.png" alt="Feature 3" />
            </div>
        </div>
        <div className={styles.imageGallery}>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img13.png" alt="Feature 4" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img13.png" alt="Feature 4" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img10.png" alt="Feature 5" />
            </div>
            <div className={styles.imageContainer}>
                <img src="https://assets.maccarianagency.com/screenshots/the-front/img10.png" alt="Feature 6" />
            </div>
        </div>
        </div>
    );
}

export default ImageGallery;
