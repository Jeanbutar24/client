import styled from "styled-components";
import { product } from "../data";
import ProductItem from "./ProductsItem";

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

const Product = () => {
  return (
    <Container>
      <WraperContainer>
        {product.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </WraperContainer>
    </Container>
  );
};

export default Product;
