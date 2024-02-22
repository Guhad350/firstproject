import '../index.css';
// import { FaSearchLocation,FaMobile,FaVoicemail} from 'react-icons/fa';
import { FaPhone, FaEnvelope ,FaFacebook } from 'react-icons/fa';
const Contact=()=>{
  return(
    <div className="contact-page">
    <div className="contact-container">
      <div className="contact-info">
      <h2>Contact Information</h2>
        <div className="contact-info-item">
        
          <FaPhone />
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-info-item">
          <FaEnvelope />
          <p>Email: info@example.com</p>
        </div>
        <div className="contact-info-item">
        <FaFacebook />
          <p>w.w.w omariFood.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
    
  ) 
}
export default Contact;