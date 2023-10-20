import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './OrganisationStyle'
import ProjectCard from '../Cards/ProjectCards'
import { organisations } from '../../data/constants'
import OrganisationCards from '../Cards/OrganisationCards'; 
import TwitterCards from '../Cards/TwitterCards'; 


const Organisations = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('Vakıf');
  return (
    <Container id="organisation">
      <Wrapper>
        <Title>Organizasyonlar</Title>
        <ToggleButtonGroup >
          {toggle === 'Vakıf' ?
            <ToggleButton active value="Vakıf" onClick={() => setToggle('Vakıf')}>Vakıf Ve Kurumlar</ToggleButton>
            :
            <ToggleButton value="Vakıf" onClick={() => setToggle('Vakıf')}>Vakıf Ve Kurumlar</ToggleButton>
          }
          <Divider />
          {toggle === 'Instagram' ?
            <ToggleButton active value="Instagram" onClick={() => setToggle('Instagram')}>Instagram</ToggleButton>
            :
            <ToggleButton value="Instagram" onClick={() => setToggle('Instagram')}>Instagram</ToggleButton>
          }
          <Divider />
          {toggle === 'Twitter' ?
            <ToggleButton active value="Twitter" onClick={() => setToggle('Twitter')}>Twitter </ToggleButton>
            :
            <ToggleButton value="Twitter" onClick={() => setToggle('Twitter')}>Twitter</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'Vakıf' && organisations
            .filter((item) => item.category === 'Vakıf')
            .map((organisation) => (
              <ProjectCard organisation={organisation} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
            {toggle === 'Instagram' &&
            organisations
              .filter((item) => item.category === 'Instagram')
              .map((organisation) => (
                <OrganisationCards organisation={organisation} setOpenModal={setOpenModal} />
              ))}
              {toggle === 'Twitter' &&
            organisations
              .filter((item) => item.category === 'Twitter')
              .map((organisation) => (
                <TwitterCards organisation={organisation} setOpenModal={setOpenModal} />
              ))}

        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Organisations;