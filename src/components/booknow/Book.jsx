import React, { useState } from 'react';
import '../../styles/BookNow.css';
import TitleSection from '../TitleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Book() {
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9\s\-]+$/;
        return phoneRegex.test(phone) && phone.trim().length > 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;
        let newErrors = { email: '', phone: '' };

        if (!validateEmail(formData.email)) {
            valid = false;
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!validatePhone(formData.phone)) {
            valid = false;
            newErrors.phone = 'Please enter a valid phone number (digits only).';
        }

        if (valid) {
            setMessageSent(true);
        
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
            
            setErrors({
                email: '',
                phone: ''
            });

          
            setTimeout(() => {
                setMessageSent(false);
            }, 5000); 
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-left">
                    <div className="title">
                        <TitleSection 
                            mainTitle="Make your dreams come true"
                            subtitle="book now" 
                            vectorLeft="/Vector 3.svg" 
                            vectorRight="/Vector 1.svg" 
                        />
                    </div>
                    <div className="contact-info">
                        <img src="/person3.svg" alt="Manager" className="contact-image" />
                        <p>Our manager Rhiel Madsen will call you back:</p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <a href="mailto:momentwedding@gmail.com"> momentwedding@gmail.com</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <a href="tel:123-456-7890"> 123-456-7890</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            River Road, Colorado Springs, CO, Colorado 80906
                        </p>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                required 
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <input 
                                type="tel" 
                                placeholder="Phone Number*" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleInputChange} 
                                required 
                            />
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>
                        <div className="form-group">
                            <textarea 
                                placeholder="How can we help you?" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleInputChange} 
                                required 
                            ></textarea>
                        </div>
                        <div className="btn">
                            <button type="submit" className="send-message-button">Send Message</button>
                        </div>
                        {messageSent && (
                            <p className="success-message">Your message has been successfully sent!</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Book;
