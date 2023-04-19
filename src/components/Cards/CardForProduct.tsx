import React from 'react';
import { useState } from 'react';

interface TproductCard {
  title: string;
  price: string;
  imageUrl: any;
}
export const CardForProduct: React.FC<TproductCard> = ({
  title,
  imageUrl,
  price,
}) => {
  const [buttonText, setButtonText] = useState('Buy Now');
  const [message, setMessage] = useState('');
  const handleClick = () => {
    if (buttonText === 'Buy Now') {
      setButtonText('Cancellation');
      setMessage('I just bought it');
    } else {
      setButtonText('Buy Now');
      setMessage('');
    }
  };
  return (
    <div>
      <div className='card' style={{ height: 600 }}>
        <img
          src={imageUrl}
          className='card-img-top'
          alt='clothes'
          style={{ width: 350, height: 460, minHeight: 400 }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <b>{price}</b>
          </p>
          <button className='btn btn-success' onClick={handleClick}>
            {buttonText}
          </button>
          <h5 className='buy'>{message}</h5>
        </div>
      </div>
    </div>
  );
};
