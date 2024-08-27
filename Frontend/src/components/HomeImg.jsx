import React from 'react';
import LoginSignupButton from './LoginSignupButton';
import styles from './HomeImg.module.css';
import ImageGallery from './ImageGallery';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h1>CollegeKaksha</h1>
        <p>Your tagline goes here. Describe what makes your website unique!</p>
        <LoginSignupButton />
      </div>
      <div className={styles.imageSection}>
        <ImageGallery />
      </div>
    </div>
  );
}

export default Home;
