import React from 'react';
import styled from 'styled-components';
import { TwitterEmbed } from 'react-social-media-embed';

const Button = styled.button`
display: none;
width: 100%;
padding: 10px;
background-color: ${({ theme }) => theme.white};
color: ${({ theme }) => theme.text_black};
font-size: 14px;
font-weight: 700;
border: none;
border-radius: 10px;
cursor: pointer;
transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 370px;
    height: 510px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
  
`

const TwitterCards = ({ organisation, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, organisation: organisation })}>
      <TwitterEmbed url={organisation.twitterUrl}  />
      {/* Add any other information you want to display below the Instagram post */}
    </Card>
  );
};

export default TwitterCards;
