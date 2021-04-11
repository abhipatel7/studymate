import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/img/StudyMateNabBar.svg';

const PayFees = () => {
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="StudyMate"
      billingAddress
      shippingAddress
      image={logo}
      description="Your fees is 450$"
      amount={450 * 100}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey="pk_test_51I6evYLKx272rZ2P4hFJnYkalLuFHejKdfLPDf24l7bjeWzjhcX0hMeSGQszMsUYpHZlN717gpjTpiycnhBnCay100x1QI4rPk"
    />
  );
};

export default PayFees;
