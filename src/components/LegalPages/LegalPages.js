// src/components/LegalPages/LegalPages.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LegalPages.css';

const documents = {
  terms: {
    title: 'Terms & Conditions',
    content: `Welcome to THE MINI PR. By purchasing our custom plastic gym miniatures, you agree to these Terms.

1. Custom Orders  
   - All miniatures are made-to-order and personalized.  
   - Once production begins (within 24 hrs of order), cancellations are not allowed.  

2. Payment  
   - Full payment required upfront (no COD).  
   - No refunds unless defective (see Returns Policy).  

3. Intellectual Property  
   - Designs, molds, and customizations are owned by theminipr.  
   - Do not replicate or resell our miniatures commercially.  

4. Limitation of Liability  
   - theminipr is not liable for misuse or improper handling of miniatures.  
   - Maximum liability = product cost.  

5. Governing Law  
   - Disputes subject to Indian law. (We’re a small bootstrap operation!)`
  },
  privacy: {
    title: 'Privacy Policy',
    content: `We collect only what’s necessary to fulfill your order:  
    - Name, shipping address, WhatsApp/email for updates.  
    - No data sold/shared (except shipping partners).  
    - Basic security measures in place (we’re testing the waters!).  
    Contact: theminipr@gmail.com for data requests.`
  },
  shipping: {
    title: 'Shipping Policy',
    content: `1. Processing: 3-7 days (custom/personalized pieces take time!).  
2. Shipping:  
   - ₹99 flat fee (Free on orders ₹1599+).  
   - No COD—pay online only.  
3. Tracking: Sent via WhatsApp/SMS/Email.  
4. Delivery Issues? Report within 24 hrs with video proof.`
  },
  returns: {
    title: 'No Refunds | Damage-Only Replacement',
    content: `1. All sales final (custom-made = no returns).  
2. **Only replacements if:**  
   - Damaged during shipping.  
   - Video proof submitted within 48 hrs of delivery.  
3. **No returns for:**  
   - Color differences (screen vs. actual).  
   - "Changed my mind."   
4. Replacement Process:  
   - Email theminipr@gmail.com with video + order ID.  
   - We’ll ship a new piece if approved.`
  },
  disclaimer: {
    title: 'Heads Up!',
    content: `- **Custom Work:** Slight variations may occur (that’s the charm!).  
- **Bootstrap & small scale :** No GST/tax invoices.  
- **Testing Phase:** Policies may change—check back often!  
- **Not Toys:** Miniatures are display pieces—keep away from kids/pets.`
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