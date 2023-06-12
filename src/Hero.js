import React from 'react';
import Mugisha from './Mugisha Logos/Mugisha.jpg';
import './App.css';

export default function Hero () {
    return (
        <div className = "hero">
        
<nav>
  <div className="logo">
    <img src={Mugisha} alt="Logo"/>
  </div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>





        </div>
    );
}