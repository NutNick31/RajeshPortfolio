
import './App.css';
import About from './components/about/About.jsx'
import {ContactUs} from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Fotter from './components/fotter/Fotter.jsx'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Services from './components/services/Services.jsx'
import Testimonial from './components/testimonials/Testimonial.jsx'



function App() {
  return (
   <div className='main'>
   
     <Header/>
     <Nav></Nav>
     <About></About>
     <Experience></Experience>
     <Services></Services>
     <Portfolio></Portfolio>
     {/* <Testimonial></Testimonial> */}
     <ContactUs></ContactUs>
     <Fotter></Fotter>
   </div>
  );
}

export default App;
