import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import './fotter.css'; 
const Fotter = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Rajesh Kumar Singh</a>
      <ul className="permalinks">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Contact</a></li>
      </ul>
      <div className="footer__socials">
         <a href="https://www.facebook.com/profile.php?id=100058609449673"><FaFacebook></FaFacebook></a>
         <a href="https://twitter.com/GeekyRaj31"><BsTwitter></BsTwitter></a>
         <a href="https://instagram.com/geekyraj31"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Rajesh Kumar Singh All Rights Reserved</small>
      </div>
    </footer>
  );
}
export default Fotter;
