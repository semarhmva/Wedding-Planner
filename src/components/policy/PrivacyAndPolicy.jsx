import React from 'react'
import '../../styles/Policy.css'
import TitleSection from '../TitleSection'
function PrivacyAndPolicy() {
  return (
   <div className="privacy">
    <div className="container">
        <div className="title">
        <TitleSection 
            mainTitle="Privacy Policy"
            subtitle="Effective Date: November 28, 2023" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
        </div>
        <div className="content">
        <p>
            At [Business Agency Name], we understand the importance of your privacy. This Privacy Policy outlines the type
            of information we collect, how we use it, and how we protect your personal information. Please read this
            policy carefully to understand how we collect, use, and disclose information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect various types of information from you when you use our website. This may include personal information such
            as your name, email address, and phone number. We may also collect non-personal information such as your IP address,
            browser type, and operating system.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We may use your personal information to contact you, provide services to you, and to improve our website. We may also
            use your non-personal information to improve our website, monitor our website usage, and analyze trends.
          </p>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share your personal information with third-party service providers who help us operate our website, provide our
            services, and fulfill your requests. We may also share your information when required by law or when we believe that
            disclosure is necessary to protect our rights or the rights of others.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
            However, we cannot guarantee the security of your information transmitted through the internet.
          </p>

          <h2>Cookies</h2>
          <p>
            We may use cookies to collect information about your use of our website. Cookies are small text files that are stored
            on your computer. You can disable cookies in your browser settings if you do not want our website to collect this
            information.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy
            on our website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us at [Business Agency Contact Information].
          </p>
        </div>
    </div>
   </div>
  )
}

export default PrivacyAndPolicy