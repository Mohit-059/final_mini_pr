// import React from 'react';
// import styles from './Contact.module.css';
// import Lottie from 'lottie-react';
// import animationData from '../../assets/lottie/Animation - 1749065618703.json';

// export default function Contact() {
//   return (
//     <div id={styles.contact}>
//       <h2 className="section-title finalminus" style={{marginTop:'-48px'}}>LET'S CONNECT</h2>
//       <div className={styles.contactSection}>
//         <div className={styles.left}>
//           <div className={styles.lottieWrapper}>
//             <Lottie animationData={animationData} loop />
//           </div>
//         </div>

//         <div className={styles.right}>
//           <div className={styles.formBox}>
//             <form>
//               <div className={styles.inputRow}>
//                 <input type="text" placeholder="Your Name" name="name" />
//                 <input type="email" placeholder="Your Email" name="email" />
//               </div>

//               <input type="text" placeholder="Subject" name="subject" className={styles.fullWidth} />
//               <textarea placeholder="Your Message" name="message" rows="5" className={styles.fullWidth}></textarea>

//               <div className={styles.buttonRow}>
//                 <button type="submit">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import styles from './Contact.module.css';
// import Lottie from 'lottie-react';
// import animationData from '../../assets/lottie/Animation - 1749065618703.json';

import React, { useRef } from 'react';
import styles from './Contact.module.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation - 1749065618703.json';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the feedback to your email
    emailjs.sendForm(
      'service_ew7rvsl',    // replace with your EmailJS service ID
      'template_rujidit',   // replace with your EmailJS template ID
      formRef.current,
      'GvVSk5wIrxDX2IriX'   // replace with your EmailJS public key
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset(); // reset the form fields

        // Send acknowledgment to the user
        const autoReplyParams = {
          to_name: e.target.name.value,
          to_email: e.target.email.value,
          message: `Hi ${e.target.name.value},

Thank you for taking the time to share your feedback. We have received it and appreciate your input.

Best regards,
-THE MINI PR`
        };

        emailjs.send(
          'service_ew7rvsl',     // your EmailJS service ID
          'template_auto_reply', // create a new template for auto-reply
          autoReplyParams,
          'GvVSk5wIrxDX2IriX'   // your EmailJS public key
        )
        .then(() => {
          console.log('Auto-reply sent to user!');
        }, (err) => {
          console.log('Auto-reply failed...', err.text);
        });

    }, (error) => {
        console.log(error.text);
        alert('Oops! Something went wrong. Try again.');
    });
  };

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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <input type="text" placeholder="Your Name" name="name" required />
                <input type="email" placeholder="Your Email" name="email" required />
              </div>

              <input type="text" placeholder="Subject" name="subject" className={styles.fullWidth} required />
              <textarea placeholder="Your Message" name="message" rows="5" className={styles.fullWidth} required></textarea>

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
