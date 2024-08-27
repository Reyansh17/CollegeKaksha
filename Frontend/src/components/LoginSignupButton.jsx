import React from 'react';
import styles from './LoginSignupButton.module.css'

function LoginSignupButton() {
  return (
    <div>
      <button class={styles.log}>Login</button>
      <button class={styles.log}>Sign Up</button>
    </div>
  );
}

export default LoginSignupButton;
