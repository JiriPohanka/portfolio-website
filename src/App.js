import Contact from './components/Contact';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
import { useState } from 'react';
import VARS from './vars'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const App = () => {

  const [activeSection, setActiveSection] = useState(0)
  const [darkMode, setDarkMode] = useState(true)

  const observer = new IntersectionObserver((elArr) => {

    const sections = {}
    const { ids } = VARS
    sections[ids.welcomeSec] = 0
    sections[ids.portfolioSec] = 1
    sections[ids.contactSec] = 2

    for (let [i, el] of elArr.entries()) {
      if (el.isIntersecting) {
        setActiveSection(() => sections[el.target.id])
      }
    }
  }, { threshold: [0.5] })

  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Welcome observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Portfolio observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Contact observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
    </ThemeProvider>

  )
}

export default App;
