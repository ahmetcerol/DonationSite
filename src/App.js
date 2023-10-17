import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme , lightTheme} from './utils/Themes';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Info from './components/InfoSection';
import Organisations from './components/Organisation';
import ProjectDetails from './components/OrganisationDetails';




const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(0, 128, 0, 0.15) 0%, rgba(0, 128, 0, 0) 50%), linear-gradient(141.27deg, rgba(0, 128, 0, 0) 50%, rgba(0, 128, 0, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };
  return (
    <ThemeProvider theme={currentTheme}>
    <Router>
    <Navbar toggleTheme={toggleTheme}/>
    <Body>
        <Info/>

        <Wrapper>
        <Organisations openModal={openModal} setOpenModal={setOpenModal} />
        </Wrapper>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    </Body>
    </Router>
   
   </ThemeProvider>
  );
}

export default App;
