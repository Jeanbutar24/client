import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";

import axios from "axios";
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border-radius: 25px;
  background-color: black;
  padding: 15px;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const KEY =
  "pk_test_51LOGjFKTe3edRc5tHC3nfOB54Bv00g13H14VoKoHNZBfYA7Aq05LBXtbFjtJu8RN25iMaKJ3NNndaFOM67WKudDq003k7yBPrJ";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken) {
      return makeRequest();
    }
  }, [stripeToken]);

  return (
    <Container>
      {stripeToken ? (
        <span>Processing please wait ...</span>
      ) : (
        <StripeCheckout
          name="Monja Collection"
          billingAddress
          shippingAddress
          description="Your Total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}>
          <Button>Pay Now</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Payment;
