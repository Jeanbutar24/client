import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 10px;
`;
const Desc = styled.p`
  margin-bottom: 10px;
`;
const SosialContainer = styled.div`
  display: flex;
`;
const SosialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #${(props) => props.color};
`;
const Center = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 10px;
`;
const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  list-style: none;
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Monja Collection</Logo>
        <Desc>
          Market Place ini dibuat untuk anda yang tidak punya uang namun ingin
          membeli pakaian dengan kualitas bagus. Karena barang itu kami sendiri
          yang menjaminnya bahwa barang sesuai dengan foto.
        </Desc>
        <SosialContainer>
          <SosialIcon color="3B5999">
            <Facebook />
          </SosialIcon>
          <SosialIcon color="E4405F">
            <Instagram />
          </SosialIcon>
          <SosialIcon color="55ACEE">
            <Twitter />
          </SosialIcon>
        </SosialContainer>
      </Left>
      <Center>
        <Title>Layanan Pelanggan</Title>
        <List>
          <ListItem>Tentang Kami</ListItem>
          <ListItem>Kebijakan Privasi</ListItem>
          <ListItem>Metode Pembayaran</ListItem>
          <ListItem> Pesanan Pembeli</ListItem>
          <ListItem> Pengiriman Penjual</ListItem>
          <ListItem>Pengembalian Barang & Dana</ListItem>
          <ListItem>Hubungi Kami</ListItem>
          <ListItem>Kontak Media</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> jln.Kp Ciburial No 59,
          kec.Padalarang, kab.Bandung Barat, Kota Bandung
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +62 818 09246939
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> jeanbutar24@gmail.com
        </ContactItem>
        <Payment />
      </Right>
    </Container>
  );
};

export default Footer;
