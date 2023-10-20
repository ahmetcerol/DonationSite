import React from "react";
import {Img,Title,SubTitle,HeroContainer, HeroInnerContainer, HeroLeftContainer,  } from "./contributeStyle";
import {contribute} from "../../data/constants";



const Contribute = () => {
    return (
<div id="contribute">
    <HeroContainer>
    <Img src="/images/dogphoto.png" alt="Info"/> 

        <HeroInnerContainer>
            <HeroLeftContainer>
                <Title> {contribute.amaçHeader} </Title>
                <SubTitle>{contribute.amaçSubTitle}</SubTitle>
                <Title> {contribute.bizKimizHeader} </Title>
                <SubTitle>{contribute.bizKimizSubTitle}</SubTitle>

            </HeroLeftContainer>
            
        </HeroInnerContainer>
    </HeroContainer>
</div>
    )
};

export default Contribute;