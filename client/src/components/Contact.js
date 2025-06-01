import React from 'react';

const Contact = () => {
  // Basic form submission handler (for demonstration, won't send actual email yet)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    alert('Form submitted! (This is a frontend demo)');
    // In a real application, you'd send this data to your Node.js backend here
    // Example: const formData = new FormData(event.target);
    // console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="contact-intro-text">Get in touch with KODEMEDIA for inquiries and collaborations.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" /> {/* type="tel" for phone numbers */}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;