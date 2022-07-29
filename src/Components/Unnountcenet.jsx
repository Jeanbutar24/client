import styled from "styled-components";

const Container = styled.div`
  background-color: #7a4069;
  display: flex;
  justify-content: center;
  position: relative;
 
`;

const Promo = styled.h3`
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

const Unnountcement = () => {
  return (
    <Container>
      <Promo>Buy Now And Get Discount 50%</Promo>
    </Container>
  );
};

export default Unnountcement;
