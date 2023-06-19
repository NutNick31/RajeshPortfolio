 import React from 'react';
import {BiCheck} from 'react-icons/bi'
import './services.css'
const Services = () => {
  return (
    <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container service__container">
          <article className="service">
           <div className="service__head">
             <h3>Mobile App Development</h3>
           </div>

           <ul className='service__list'>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Debugging in an existing mobile app</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>New feature's implementation in existing application</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Application construction from scratch with 24/7 assistance</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Work completion before time</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>100% Quality work</p>
             </li>
             {/* <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li> */}
           </ul>
          </article>



          <article className="service">
           <div className="service__head">
             <h3>Web Development</h3>
           </div>

           <ul className='service__list'>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Debugging in an existing website</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>New feature's implementation in existing website</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Website construction from scratch with 24/7 assistance</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Work completion before time</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>100% Quality work</p>
             </li>
             {/* <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li> */}
           </ul>
          </article>



          <article className="service">
           <div className="service__head">
             <h3>Blockchain Development</h3>
           </div>

           <ul className='service__list'>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Services Coming Soon......</p>
             </li>
             {/* <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </li> */}
           </ul>
          </article>
        </div>
    </section>

    
  );
}

export default Services;
