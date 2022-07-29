import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Unnountcement from "../Components/Unnountcenet";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  @media (max-width: 508px) {
    display: none;
  }
`;
const TopText = styled.span`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 508px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50vh;
  @media (max-width: 508px) {
    flex-direction: column;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Price = styled.span`
  margin: 20px;
  font-weight: 200;
  font-size: 20px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
`;
const Cart = () => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return false;
    }
  };
  return (
    <Container>
      <Unnountcement />
      <Header />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shoping Bag (2)</TopText>
            <TopText>Your Whistlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Chekout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/djNb12m/kaos-jean.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> KAOS POLOS
                  </ProductName>
                  <ProductID>
                    <b>ProductID:</b> 124239
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AddContainer>
                  <AmountContainer>
                    <Remove
                      style={{ cursor: "pointer" }}
                      onClick={handleMinus}
                    />
                    <Count>{count}</Count>
                    <Add style={{ cursor: "pointer" }} onClick={handlePlus} />
                  </AmountContainer>
                </AddContainer>
                <Price>Rp 45.000,00</Price>
              </PriceDetail>
            </Product>

            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/1XbfbnK/celana-jeans-pendek.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> KAOS POLOS
                  </ProductName>
                  <ProductID>
                    <b>ProductID:</b> 124239
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AddContainer>
                  <AmountContainer>
                    <Remove
                      style={{ cursor: "pointer" }}
                      onClick={handleMinus}
                    />
                    <Count>{count}</Count>
                    <Add style={{ cursor: "pointer" }} onClick={handlePlus} />
                  </AmountContainer>
                </AddContainer>
                <Price>Rp 45.000,00</Price>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rp. 90.000,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Ongkos Kirim</SummaryItemText>
              <SummaryItemPrice>Rp. 12.000,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Potongan Harga</SummaryItemText>
              <SummaryItemPrice>Rp. 5.000,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rp. 97.000,00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
