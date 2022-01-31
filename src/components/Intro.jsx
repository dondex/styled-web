import React from 'react';
import styled from 'styled-components';
import Woman from '../img/woman.png';

const Container = styled.div`
    height: calc( 100vh - 50px );
    display: flex;
    padding: 20px;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    width: 60%;
    font-size: 55px;
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 15px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: blue;
        border: 1px solid blue;
    };
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
    margin-right: 20px;
`;

const Right = styled.div`
    width: 40%;
`;

const Image = styled.img`
    width: 100%;
    margin-top: 90px;
    margin-left: 20px;
`;

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age.</Title>
            <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call 0999-359-5517</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
            </Left>
        <Right>
            <Image src={Woman}/>
        </Right>

    </Container>
    
    );
};

export default Intro;
