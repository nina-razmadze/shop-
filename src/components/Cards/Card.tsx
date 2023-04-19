import { useState } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  author_name: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, author_name }) => {
  const [buttonText, setButtonText] = useState('Buy Now');
  const [message, setMessage] = useState('');
  const handleClick = () => {
    if (buttonText == 'Buy Now') {
      setButtonText('Cancellation');
      setMessage('I just bought it');
    } else {
      setButtonText('Buy Now');
      setMessage('');
    }
  };
  return (
    <div className='card'>
      <img
        src={imageUrl}
        style={{ height: 460 }}
        className='card-img-top'
        alt='books'
      />
      <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{author_name}</p>
      </div>
      <button className='btn btn-info' onClick={handleClick}>
        {buttonText}
      </button>
      <p className='buy'>{message}</p>
    </div>
  );
};
