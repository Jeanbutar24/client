import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #5a1c4d;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchWrapper = styled.div`
  align-items: center;
  margin-left: 25px;
  display: flex;
`;
const Input = styled.input`
  border-radius: 25px;
  border: none;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 35px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
`;
const Login = styled.p`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
const Register = styled.p`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchWrapper>
            <Input />
            <Search />
          </SearchWrapper>
        </Left>
        <Center>
          <Logo>Monja Collection</Logo>
        </Center>
        <Right>
          <Login>Login</Login>
          <Register>Register</Register>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined color="light" />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
