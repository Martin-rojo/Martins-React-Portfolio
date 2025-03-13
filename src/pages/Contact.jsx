import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (!value.trim()) {
      setErrorMessage({
        ...errorMessage,
        [name]: 'This field is required',
      });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrorMessage({
        ...errorMessage,
        email: 'Please enter a valid email address',
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled and valid
    if (!formState.name || !formState.email || !formState.message || !validateEmail(formState.email)) {
      // If any field is empty or email is invalid, show appropriate errors
      const newErrorMessage = {
        name: formState.name ? '' : 'Name is required',
        email: !formState.email ? 'Email is required' : (!validateEmail(formState.email) ? 'Please enter a valid email address' : ''),
        message: formState.message ? '' : 'Message is required',
      };
      
      setErrorMessage(newErrorMessage);
      return;
    }
    
    // Form is valid - in a real app, you would submit to backend here
    console.log('Form submitted:', formState);
    
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      message: '',
    });
    
    // Show success message (in a real app, handle this appropriately)
    alert('Message sent! Thank you for contacting me.');
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>Feel free to reach out to me directly:</p>
          <p><i className="fas fa-envelope"></i> Martin.rojo101@gmail.com</p>
          <p><i className="fas fa-phone"></i> (646) 943-9928</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorMessage.name ? 'error' : ''}
            />
            {errorMessage.name && <p className="error-text">{errorMessage.name}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorMessage.email ? 'error' : ''}
            />
            {errorMessage.email && <p className="error-text">{errorMessage.email}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorMessage.message ? 'error' : ''}
            ></textarea>
            {errorMessage.message && <p className="error-text">{errorMessage.message}</p>}
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;