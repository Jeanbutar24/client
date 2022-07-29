import styled from "styled-components";
import { productPromo } from "../data";
import PromoProduct from "./PromoProduct";

const Container = styled.div`
  height: 100%;
  background-color: #fcf1ed;
`;

const WraperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.div``;

const H2 = styled.h2`
  padding: 30px;
  font-size: 37px;
`;
const Promo = () => {
  return (
    <Container>
      <Title>
        <H2>Promo Today !!!</H2>
      </Title>
      <WraperContainer>
        {productPromo.map((item) => (
          <PromoProduct item={item} />
        ))}
      </WraperContainer>
    </Container>
  );
};

export default Promo;
