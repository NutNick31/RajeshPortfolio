import React from 'react';
import CTA from './CTA.jsx'
import ME from '../../assets/First-removebg-preview1.png'
import './header.css';
import '../../index.css'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
     <header className="">
        <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rajesh Kumar Singh</h1>
        <h5 className="text-light">Software Developer</h5>
        <HeaderSocials></HeaderSocials>
        <CTA></CTA>
       <div className="me">
         <img src={ME} alt="me"></img>                          
       </div>
       <a href="#contact" className="scroll__down">Scroll Down</a>
       
      </div>
      
     </header>
       
                                                                               
  );
}

export default Header;
