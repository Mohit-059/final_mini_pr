import React from 'react';
import styles from './Contact.module.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation - 1749065618703.json';

export default function Contact() {
  return (
    <div id={styles.contact}>
      <h2 className="section-title finalminus" style={{marginTop:'-48px'}}>LET'S CONNECT</h2>
      <div className={styles.contactSection}>
        <div className={styles.left}>
          <div className={styles.lottieWrapper}>
            <Lottie animationData={animationData} loop />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formBox}>
            <form>
              <div className={styles.inputRow}>
                <input type="text" placeholder="Your Name" name="name" />
                <input type="email" placeholder="Your Email" name="email" />
              </div>

              <input type="text" placeholder="Subject" name="subject" className={styles.fullWidth} />
              <textarea placeholder="Your Message" name="message" rows="5" className={styles.fullWidth}></textarea>

              <div className={styles.buttonRow}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
