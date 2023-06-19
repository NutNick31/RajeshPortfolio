import React from 'react';

import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './header.css';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rajesh-kumar-singh-2933371aa/" target="_blank"><ImLinkedin></ImLinkedin></a>
      <a href="https://github.com/nutnick31" target="_blank"><BsGithub /></a>
      <a href="https://instagram.com/geekyraj31" target="_blank"><BsInstagram></BsInstagram></a>
    </div>
  );
}

export default HeaderSocials;
