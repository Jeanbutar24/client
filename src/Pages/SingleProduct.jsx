import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Unnountcement from "../Components/Unnountcenet";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const Container = styled.div``;

const Page = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 508px) {
    padding: 10px;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  @media (max-width: 508px) {
    height: 50vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 40px;
`;
const Desc = styled.p`
  margin: 40px 0;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const Select = styled.select`
  padding: 5px;

  margin-left: 10px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Option = styled.option``;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 508px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  cursor: pointer;
`;
const Button = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid teal;
  width: 90px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const AddContainer = styled.div`
  margin-top: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Count = styled.p`
  width: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid teal;
  font-weight: 500;
`;
const SingleProduct = () => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return false;
    }
  };

  return (
    <Container>
      <Unnountcement />
      <Header />
      <Categories />
      <Page>
        <ImgContainer>
          <Image src="https://i.ibb.co/djNb12m/kaos-jean.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kaos Polos</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt, ipsam nam sit ex inventore! Quam et reprehenderit ex cum
            neque non distinctio quae beatae.
          </Desc>
          <Price>Rp 45.000,00</Price>
          <FilterContainer>
            <Filter>
              <h2 style={{ marginRight: "10px" }}>Color</h2>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                <Option>XXX</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} onClick={handleMinus} />
              <Count>{count}</Count>
              <Add style={{ cursor: "pointer" }} onClick={handlePlus} />
            </AmountContainer>
          </AddContainer>
          <Button>Buy Now</Button>
        </InfoContainer>
      </Page>
      <Footer />
    </Container>
  );
};

export default SingleProduct;
