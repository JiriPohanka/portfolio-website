import Contact from './components/Contact';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
import { useState, useEffect } from 'react';
import VARS from './vars'

const App = () => {

  const [activeSection, setActiveSection] = useState(0)

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


  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Welcome observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Portfolio observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Contact observer={observer} activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  )
}

export default App;
