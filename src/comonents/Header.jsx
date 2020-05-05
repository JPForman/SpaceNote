import React from 'react';
import '../scss/_header.scss'
import { Link } from 'react-router-dom';
import SpaceNote from '../img/spaceNoteLogo.png'


export default function Header(){


  return(
  <div>
    <div className='header'>
      <Link className="noUnderline" to="/">
        <img className='spaceNote' src={SpaceNote} alt="space-note logo"/>
      </Link>
      <div></div>
      <Link className="noUnderline" to="/feed">My Feed</Link>
      <Link className="noUnderline" to="/profile">My Profile</Link>
      <Link className="noUnderline" to="/"> Log Out </Link>
    </div>
  </div>
  )
}