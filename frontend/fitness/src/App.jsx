import HeroSection from "./components/Herosection"
import InspireSection from "./components/InspireSection"
import WhatSetsUsApart from "./components/WhatSetsUsApart"
import ConnectEngageTransform from "./components/ConnectEngageTransform"
import Navbar from './components/Navbar';
function App() {

  return (
  <>

  <Navbar />

  <section id="home">
    <HeroSection />
  </section>

  <section id="about">
    <InspireSection />
  </section>

  <section id="explore">
    <WhatSetsUsApart />
  </section>

  <section id="contact">
    <ConnectEngageTransform />
  </section>
</>
  )
}

export default App
