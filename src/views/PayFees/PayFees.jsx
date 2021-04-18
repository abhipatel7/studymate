import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/img/StudyMateNabBar.svg';

const PayFees = () => {
  const onToken = () => {
    // eslint-disable-next-line no-alert
    alert('Payment Successful');
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-3">
      <div className="text-lg font-semibold">Haven&apos;t paid fees yet?</div>
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
    </div>
  );
};

export default PayFees;
