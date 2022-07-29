import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  cursor: pointer;
`;
const Info = styled.p``;
const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 50%;
`;

const ProductPromo = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const onMouseEnter = () => {
    setTitle("Buy Now");
  };
  const onMouseLeave = () => {
    setTitle(item.title);
  };
  return (
    <Container>
      <Image src={item.img} />
      <Title onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {title}
      </Title>
      <Info>{item.discount}</Info>
    </Container>
  );
};

export default ProductPromo;
