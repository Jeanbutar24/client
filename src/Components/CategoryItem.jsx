import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 30px;
  margin: 3px;
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #7a4069;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
  line-height: 20px;

  &:hover {
    font-weight: bolder;
    transform: scale(1.05);
  }
`;

const Category = styled.h2`
  color: white;
  font-size: 15px;
  transition: all 1.5 ease;

  &:active {
    /* text-decoration: solid 2px underline white; */
    font-size: 19px;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Category>{item.title} </Category>
      </Wrapper>
    </Container>
  );
};

export default CategoryItem;
