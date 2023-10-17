import React from "react";
import {TextLoop,Title, Img,SubTitle,Span,HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer } from "./InfoStyle";
import {Bio} from "../../data/constants";
import Typewriter from "typewriter-effect";



const Info = () => {
    return (
<div id="about">
    <HeroContainer>
    <Img src="/images/infoPhoto.png" alt="Info"/> 
        <HeroInnerContainer>
            <HeroLeftContainer>
                <Title>  <br/> {Bio.name}</Title>
                <TextLoop>
                    <Span>
                        <Typewriter   options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}/>
                    </Span>
                </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
            </HeroLeftContainer>
            
        </HeroInnerContainer>
    </HeroContainer>
</div>
    )
};

export default Info;