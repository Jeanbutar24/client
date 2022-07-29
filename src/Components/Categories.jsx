import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #7a4069;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CategoryItem item={item} key={index}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
