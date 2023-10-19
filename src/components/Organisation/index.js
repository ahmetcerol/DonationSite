import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './OrganisationStyle'
import ProjectCard from '../Cards/ProjectCards'
import { organisations } from '../../data/constants'


const Organisations = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="organisation">
      <Wrapper>
        <Title>Organisations</Title>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Tüm Çalışmalar</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Tüm Çalışmalar</ToggleButton>
          }
          <Divider />
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
          {toggle === 'all' && organisations
            .map((organisation) => (
              <ProjectCard organisation={organisation} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {organisations
            .filter((item) => item.category == toggle)
            .map((organisation) => (
              <ProjectCard organisation={organisation} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Organisations;