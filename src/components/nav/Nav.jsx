import React from 'react';
import {HiOutlineHome} from 'react-icons/hi';
import {BsPersonFill} from 'react-icons/bs';
import {BiBook} from 'react-icons/bi';
import {FcServices} from 'react-icons/fc';
import {IoMdContacts} from 'react-icons/io';
import {useState} from 'react';
import './nav.css'
const Nav = () => {
  const [activate,setActivate]=useState('#')
  return (
    
    <nav>
      <a href="#" onClick={()=>setActivate('#')}  className={activate==='#'?'active':''} ><HiOutlineHome></HiOutlineHome></a>
      <a href="#about" onClick={()=>setActivate('about')} className={activate==='about'?'active':''}><BsPersonFill></BsPersonFill></a>
      <a href="#experience" onClick={()=>setActivate('experience')} className={activate==='experience'?'active':''}><BiBook></BiBook></a>
      <a href="#services" onClick={()=>setActivate('services')} className={activate==='services'?'active':''}><FcServices></FcServices></a>
      <a href="#contact" onClick={()=>setActivate('contact')} className={activate==='contact'?'active':''}><IoMdContacts></IoMdContacts></a>
    </nav>
  );
}

export default Nav;
