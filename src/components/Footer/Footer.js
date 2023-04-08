import {  GitHub, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EXPRESS CART</Logo>
        <Desc>
          India gourmet food, groceries, health and personal care products,
          industrial & scientific supplies, kitchen items, jewelry, watches,
          lawn and garden items, musical instruments.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Help</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> cartt@express.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
