import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Unnountcement from "../Components/Unnountcenet";
import styled from "styled-components";
import Product from "../Components/Product";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 5px;

  margin-left: 10px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Unnountcement />
      <Header />
      <Categories />
      <Title>Pakaian Pria</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product :</FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>white</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
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
        <Filter>
          <FilterText>Sort Product :</FilterText>
          <Select>
            <Option>Terbaru</Option>
            <Option>Harga Terendah</Option>
            <Option>Harga Tertinggi</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Footer />
    </Container>
  );
};

export default ProductList;
