import React, { useState } from 'react';
import './Payment.css'; // Import the CSS file for styling
import axios from 'axios';

const PaymentForm = () => {
  const [card_number, setcard_number] = useState('');
  const [card_holder, setcard_holder] = useState('');
  const [expiry_date, setexpiry_date] = useState('');
  const [cvv, setcvv] = useState('');

  const handlePayment = (event) => {
    event.preventDefault();
   
    console.log('Payment details:', card_number, card_holder, expiry_date, cvv);
    const data={
     card_Number:card_number,
     card_Holder:card_holder,
     expiry_Date:expiry_date,
     cvv:cvv
    };
    
    axios.post('http://localhost:8080/post',data)
  };

  const handlecard_numberChange = (event) => {
    setcard_number(event.target.value);
  };

  const handlecard_holderChange = (event) => {
    setcard_holder(event.target.value);
  };

  const handleexpiry_dateChange = (event) => {
    setexpiry_date(event.target.value);
  };

  const handlecvvChange = (event) => {
    setcvv(event.target.value);
  };

  return (
    <form className="payment-form" onSubmit={handlePayment}>
    <div className='cardd'>
      <label>
        Card Number:
        <input
          type="tex"
          value={card_number}
          onChange={handlecard_numberChange}
          maxLength={16}
          required
        />
      </label>
      <label>
        Card Holder:
        <input
          type="tex"
          value={card_holder}
          onChange={handlecard_holderChange}
          required
        />
      </label>
      <div className="expiry-cvv-container">
        <label>
          Expiry Date:
          <input
            type="tex"
            value={expiry_date}
            onChange={handleexpiry_dateChange}
            maxLength={5}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="tex"
            value={cvv}
            onChange={handlecvvChange}
            maxLength={3}
            required
          />
        </label>
        </div>
      </div>
      <div className='but'>
      <button type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default PaymentForm;