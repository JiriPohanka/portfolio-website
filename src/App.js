import BackgroundWrap from './components/BackgroundWrap';
import Header from './components/Header/Header';
import Welcome from './components/Welcome';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import VARS from './vars'
import { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme'

const App = () => {

  const [activeSection, setActiveSection] = useState(0)
  const [mobileOn, setMobileOn] = useState(window.innerWidth < 768)

  // // create context
  // const MobContext = createContext()

  // watch if size screen is smaller than 768px width
  useEffect(() => {
    window.addEventListener('resize', () => setMobileOn(() => window.innerWidth < 768))
  }, [])

  // control theme
  const [darkMode, setDarkMode] = useState(false)
  const theme = darkMode ? darkTheme : lightTheme

  // switching of active sections
  const observer = new IntersectionObserver((elArr) => {
    const sections = {}
    const { ids } = VARS
    sections[ids.welcomeSec] = 0
    sections[ids.techStackSec] = 1
    sections[ids.portfolioSec] = 2
    sections[ids.contactSec] = 3

    for (let el of elArr) {
      if (el.isIntersecting) {
        setActiveSection(() => sections[el.target.id])
      }
    }
  }, { threshold: [0.6] })


  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrap activeSection={activeSection} />
      {/* <MobContext.Provider value={mobileOn}> */}
      <Header mobileOn={mobileOn} activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Welcome mobileOn={mobileOn} observer={observer} activeSection={activeSection} />
      <TechStack mobileOn={mobileOn} observer={observer} activeSection={activeSection} />
      <Portfolio mobileOn={mobileOn} observer={observer} activeSection={activeSection} />
      <Contact mobileOn={mobileOn} observer={observer} activeSection={activeSection} />
      {/* </MobContext.Provider> */}
    </ThemeProvider >
  )
}

export default App;
