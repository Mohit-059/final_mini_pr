import React, { useState, useEffect } from 'react';
import './GiftBox.css';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reward, setReward] = useState({ 
    text: '', 
    worth: '', 
    code: 'GIFT#---' 
  });
  const [expiry, setExpiry] = useState(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  // Reward configurations
  const rewards = [
    { id: 1, text: 'complementary Barbell Holder', range: [1, 350], worth: '₹199 Value' },
    { id: 2, text: 'complementary 2 Extra Plates', range: [351, 700], worth: '₹299 Value' },
    { id: 3, text: '₹50 FLAT OFF', range: [701, 999], worth: 'Instant Savings' },
  ];

  // Generate random code within range
  const generateCode = (min, max) => {
    return `GIFT#${Math.floor(min + Math.random() * (max - min + 1))}`;
  };

  // Initialize or refresh reward
  const initReward = () => {
    const now = new Date();
    const storedReward = JSON.parse(localStorage.getItem('miniPrReward'));

    if (storedReward && new Date(storedReward.expiry) > now) {
      setReward(storedReward.reward);
      setExpiry(new Date(storedReward.expiry));
    } else {
      const newReward = rewards[Math.floor(Math.random() * rewards.length)];
      const [min, max] = newReward.range;
      const expiryTime = new Date(now.getTime() + 12 * 60 * 60 * 1000);
      
      const rewardData = {
        reward: {
          ...newReward,
          code: generateCode(min, max)
        },
        expiry: expiryTime
      };

      localStorage.setItem('miniPrReward', JSON.stringify(rewardData));
      setReward(rewardData.reward);
      setExpiry(expiryTime);
    }
  };

  // Live countdown timer
  useEffect(() => {
    const updateTimer = () => {
      if (!expiry) return '00:00:00';
      
      const now = new Date();
      const diff = expiry - now;
      
      if (diff <= 0) {
        initReward();
        return '00:00:00';
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [expiry]);

  // Initialize on mount
  useEffect(() => {
    initReward();
    const interval = setInterval(initReward, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gift-container">
      {/* Floating Gift Icon */}
      <div className="gift-icon" onClick={() => setIsOpen(true)}>
        🎁
      </div>

      {/* Countdown Bubble */}
      {showCountdown && (
        <div className="countdown-bubble" onClick={() => setIsOpen(true)}>
          🎁 Expires in: {timeLeft}
        </div>
      )}

      {/* Reward Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
            
            <h3>SPECIAL GIFT FOR YOU!</h3>
            
            {/* Guaranteed Visible Reward Info */}
            <div className="reward-text">{reward.text}</div>
            <div className="reward-worth">{reward.worth}</div>
            
            <div className="reward-code">
              {reward.code || 'GIFT#---'}
            </div>
            
            <div className="expiry-timer">
              ⏳ Expires in: {timeLeft}
            </div>
            
            <p className="claim-instruction">
              DM this code to claim your gift!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;