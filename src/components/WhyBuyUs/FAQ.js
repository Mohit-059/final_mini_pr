import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What is The Mini PR and what do you sell?',
    answer: 'The Mini PR is a one-of-a-kind setup store where strength meets aesthetics. We sell miniature gym-themed collectibles and accessories for desk setup and lifestyle motivation.'
  },
  {
    question: 'Do you offer returns or exchanges?',
    answer: 'Yes, we offer replacements for damaged or incorrect products. Just contact us within 24 hours of delivery with unboxing proof.'
  },
  {
    question: 'What if my product arrives broken or defective?',
    answer: 'We double-check every item before shipping, but in the rare case something breaks, we’ll replace it. Just provide us with an unboxing video as proof.'
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Yes within 24 hrs. of Order,  Once production begins - cancellations are not allowed'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Most orders ship within 3-7 business days. Delivery usually takes 4–8 days depending on your location.'
  },
  {
    question: 'Are these really made from plastic?',
    answer: 'Yes, high-quality PLA plastic for durability and finish. We don’t compromise on the feel.'
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you’ll receive a WhatsApp or email message with tracking details.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within India. But global fans—hold on—we’re coming soon!'
  },
  {
    question: 'Are your products limited edition?',
    answer: 'Yes, many drops are limited. If you love something, grab it before it’s gone!'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading section-title ">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button onClick={() => toggle(index)} className="faq-question">
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
