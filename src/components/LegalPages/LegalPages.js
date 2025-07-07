// src/components/LegalPages/LegalPages.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LegalPages.css';

const documents = {
  terms: {
    title: 'Terms & Conditions',
    content: `Welcome to Aurelia. By accessing or using our services, you agree to be bound by these Terms & Conditions.

1. Acceptance of Terms
These Terms govern your use of our website, applications, and services. By accessing or using our platform, you confirm your agreement to these Terms.

2. Intellectual Property
All content, designs, logos, and trademarks displayed on our platform are the exclusive property of Aurelia and are protected by intellectual property laws.

3. User Responsibilities
You agree to use our services only for lawful purposes and in accordance with these Terms. You must not misuse our platform or engage in any activities that may compromise its security.

4. Limitation of Liability
Aurelia shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.

5. Governing Law
These Terms shall be governed by and construed in accordance with the laws of Monaco, without regard to its conflict of law principles.`
  },
  privacy: {
    title: 'Privacy Policy',
    content: `At Aurelia, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.

1. Information Collection
We collect personal information when you:
- Create an account
- Make a purchase
- Subscribe to our newsletter
- Contact customer support

2. Use of Information
We use your information to:
- Process transactions
- Personalize your experience
- Improve our services
- Communicate with you

3. Data Security
We implement advanced security measures including encryption, secure servers, and regular security audits to protect your information.

4. Third-Party Sharing
We do not sell your personal information. We may share information with trusted partners only when necessary to provide our services.

5. Your Rights
You have the right to access, correct, or delete your personal information. Contact privacy@aurelia.com for assistance.`
  },
  shipping: {
    title: 'Shipping Policy',
    content: `Aurelia provides premium global shipping services to ensure your luxury items arrive safely and promptly.

1. Processing Time
All orders are processed within 1-2 business days. Custom-made items may require additional production time.

2. Shipping Methods
We offer:
- Standard Shipping (5-7 business days)
- Express Shipping (2-3 business days)
- White Glove Delivery (by appointment)

3. International Shipping
We ship worldwide. Duties and taxes are calculated at checkout for a seamless delivery experience.

4. Order Tracking
You will receive a tracking number via email once your order ships. Track your package through our website.

5. Delivery Issues
If you experience any delivery problems, contact our concierge team within 48 hours of delivery at concierge@aurelia.com.`
  },
  returns: {
    title: 'Returns & Exchanges',
    content: `Aurelia offers a premium returns experience for your convenience.

1. Return Policy
Items may be returned within 30 days of delivery for a full refund or exchange. Items must be:
- Unworn and unused
- In original packaging
- With all tags attached

2. Exceptions
The following items cannot be returned:
- Custom-made or personalized items
- Fragrances
- Items marked "Final Sale"

3. Return Process
To initiate a return:
1. Contact concierge@aurelia.com
2. We'll provide a prepaid return label
3. Package your item securely
4. Schedule a pickup or drop off at an authorized location

4. Refunds
Refunds are processed within 5 business days of receiving your return. You will be notified via email when your refund is issued.

5. Exchanges
For size exchanges, we offer complimentary shipping for the replacement item.`
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: `At Aurelia, we understand that plans change. Our cancellation policy is designed for your convenience.

1. Order Cancellation
You may cancel your order within 24 hours of placement without penalty. After 24 hours, a cancellation fee of 10% may apply.

2. Custom Orders
Custom-made or personalized items cannot be cancelled once production has begun (typically 48 hours after order placement).

3. How to Cancel
To cancel an order:
- Email concierge@aurelia.com
- Include your order number
- Specify reason for cancellation

4. Refunds
If payment has been processed, refunds will be issued within 5 business days to your original payment method.

5. Subscription Cancellations
You may cancel subscriptions at any time through your account settings. Cancellations take effect at the end of your current billing cycle.`
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `This disclaimer governs your use of Aurelia's website and services.

1. Content Accuracy
While we strive for accuracy, we do not warrant that product descriptions, pricing, or other content is complete or error-free.

2. Product Representation
Colors and textures may appear differently on screen than in person. We recommend ordering samples for exact color matching.

3. Third-Party Links
Our site may contain links to third-party websites. We are not responsible for the content or practices of these sites.

4. Limitation of Liability
Aurelia shall not be liable for any damages resulting from your use of our products or services beyond the purchase price of the item.

5. Jurisdictional Limitations
Our products and services may not be available in all jurisdictions. We reserve the right to limit quantities and refuse service.

Aurelia reserves the right to modify this disclaimer at any time.`
  }
};

const LegalPages = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const doc = documents[currentPath] || documents['terms'];
  
  // State to track active mobile nav item
  const [activeItem, setActiveItem] = useState(currentPath);

  // Update active item when path changes
  useEffect(() => {
    setActiveItem(currentPath);
  }, [currentPath]);

  return (
    <div className="legal-container">
      
      <div className="legal-wrapper">
        {/* Mobile Navigation - Wrapped Flex */}
        <nav className="mobile-legal-nav">
          <div className="nav-links-container">
            {Object.entries(documents).map(([key, { title }]) => (
              <Link 
                key={key} 
                to={`/legal/${key}`}
                className={`nav-link ${activeItem === key ? 'active' : ''}`}
                onClick={() => setActiveItem(key)}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Desktop Sidebar */}
        <aside className="legal-sidebar">
          <div className="sidebar-header">
            <h3>Legal Documents</h3>
          </div>
          <ul>
            {Object.entries(documents).map(([key, { title }]) => (
              <li key={key} className={currentPath === key ? 'active' : ''}>
                <Link to={`/legal/${key}`}>
                  <div className="link-content">
                    <span className="link-icon">◆</span>
                    <span>{title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="legal-content">
          <div className="content-header">
            <h1>{doc.title}</h1>
            <div className="last-updated">
              Last updated: June 30, 2025
            </div>
          </div>
          <div className="content-scroll">
            <div className="content-text">
              {doc.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      
    </div>
  );
};

export default LegalPages;