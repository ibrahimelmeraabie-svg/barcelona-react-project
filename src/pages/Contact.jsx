import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="container section page-section">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Your Name" />
        <input required type="email" placeholder="Your Email" />
        <textarea required placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>

        {sent && <p className="success">Message submitted successfully!</p>}
      </form>
    </section>
  );
}