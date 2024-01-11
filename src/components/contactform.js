import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_km8dcbh', 'template_72mlvl5', form.current, 'user_yoB8k6OuUmjq37MF1leBo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const showNotification = () => {
    // Display a UIkit notification
    toast("Message Sent! Thanks for reaching out.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div class="uk-flex-center" align="center">
        <form ref={form} onSubmit={sendEmail} style={{width: "100vw", marginBottom: 32}}>
            <input type="text" name="from_name" placeholder="Your Name" class="contactInput" style={{width: isSmallScreen ? "70vw" : "50vw"}} uk-scrollspy="cls: uk-animation-slide-right; repeat: false"/>
            <input type="email" name="userEmail" placeholder="Your Email" class="contactInput" style={{width: isSmallScreen ? "70vw" : "50vw"}} uk-scrollspy="cls: uk-animation-slide-right; repeat: false"/>
            <textarea name="message" placeholder="Your Message" class="contactInput2" style={{width: isSmallScreen ? "70vw" : "50vw"}} uk-scrollspy="cls: uk-animation-slide-right; repeat: false"/>
            <br/>
            <button type="submit" value="Send" class="submitForm" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false"><div style={{marginLeft: 8, display: "inline-block"}} onClick={showNotification}>Send</div> <span uk-icon="arrow-right"></span></button>
        </form>
        <ToastContainer />
    </div>
  );
};