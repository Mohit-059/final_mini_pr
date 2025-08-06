// src/components/FeedbackPage.js

import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { feedbacks } from '../../data/feedbacks';

const FeedbackPage = () => {
  const allUserImages = feedbacks.flatMap(f => f.userUploadedImages);

  const styles = `
    .feedback-page {
      padding: 40px 20px;
      margin-top: 50px;
      background-color: transparent;
      font-family: 'Roboto', sans-serif;
      max-width: 1400px; /* Aligns with main product-detail container */
      margin: 0 auto;
    }
    
    .feedback-title {
      font-size: 2.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 40px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .feedback-cards-container {
      display: flex;
      flex-wrap: wrap; /* Allows cards to wrap on large screens */
      gap: 30px;
      justify-content: center; /* Centers cards horizontally */
      max-width: 1200px;
      margin: 0 auto;
    }

    .feedback-card {
      min-width: 300px;
      max-width: 350px;
      background: rgba(26, 26, 26, 0.7);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
      border: 1px solid #333;
    }

    .feedback-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    }

    .card-image-container {
      width: 100%;
      height: 300px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;
    }
    
    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card-image:hover {
      transform: scale(1.1);
    }
    
    .card-text-content {
      padding: 25px;
      display: flex;
      flex-direction: column;
    }
    
    .feedback-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .user-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #d4af37;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .user-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
    }
    
    .rating {
      display: flex;
      gap: 3px;
    }
    
    .star-icon {
      color: #d4af37;
      font-size: 1.2rem;
    }
    
    .feedback-comment {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #ccc;
    }
    
    @media (max-width: 768px) {
      .feedback-title {
        font-size: 1.8rem;
        margin-bottom: 30px;
      }
      .feedback-cards-container {
        flex-wrap: nowrap; /* Forces horizontal scroll on mobile */
        overflow-x: auto;
        justify-content: flex-start;
        padding: 0 15px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .feedback-cards-container::-webkit-scrollbar {
        display: none;
      }
      .feedback-card {
        min-width: 280px;
        max-width: 300px;
      }
    }
  `;

  return (
    <section className="feedback-page">
      <style>{styles}</style>
      <h2 className="feedback-title section-title-top">THE COMMUNITY'S VERDICT</h2>
      
      <div className="feedback-cards-container">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <div className="card-image-container">
              {feedback.userUploadedImages && feedback.userUploadedImages.length > 0 ? (
                <img
                  src={feedback.userUploadedImages[0]}
                  alt={`${feedback.userName}'s build`}
                  className="card-image"
                />
              ) : (
                <span style={{color: '#888'}}>No image available</span>
              )}
            </div>

            <div className="card-text-content">
              <div className="feedback-header">
                <div className="user-info">
                  <img src={feedback.userImage} alt={feedback.userName} className="user-photo" />
                  <span className="user-name">{feedback.userName}</span>
                </div>
                <div className="rating">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <IoIosStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              <p className="feedback-comment">{feedback.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackPage;