import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;

const Menu = styled.ul`
    display: flex;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: crimson;
    };
`;

const Button = styled.button`
    border: 1px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: crimson;

    }
`;

const Navbar = () => {
  return (
      <Container>
          <Wrapper>
            <Left>
                <Logo>Dx.</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
            <Button>JOIN TODAY</Button>
          </Wrapper>
      </Container>
  );
};

export default Navbar;
