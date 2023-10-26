// import AboutMe from "./Components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonSection from "./Components/ButtonSection";
import ContactMe from "./Components/ContactMe";
import HeroSection from "./Components/HeroSection";
import WebDevelopmentSection from "./Components/WebDevelopment";
import Portfolio from './Components/MicroBiologyPort';





function App() {
  return (
    <Router>
    <div >

      <HeroSection/>
      <ButtonSection/>
      <Routes> 
      <Route path="/microbiology" element={ <Portfolio/>} />
      <Route path="/web-development" element={<WebDevelopmentSection />} />
    
         </Routes>
      <ContactMe/>
    </div>
    </Router>
  );
}

export default App;
