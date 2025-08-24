import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false); // ✅ Your state goes here

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gadtfcn',
      '_ejs-test-mail-service_',
      form.current,
      'UG4Xi0t_o2XQsanqF'
    ).then(
      () => setSent(true),
      (error) => {
        console.error(error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      {sent ? <p>✅ Sent!</p> : <button type="submit">Send</button>}
    </form>
  );
};

export default ContactForm;