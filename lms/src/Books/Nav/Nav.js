import React, { useState } from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nav = () => {


  return (
    <div className="nav-box">
      <div className="left-side-nav">
        <h1>BOOKS LIBRARY PORTAL</h1>
      </div>
      <div className="right-side-nav">
        <ul>
          {/* <input type='search'value={search} onChange={(e)=>searchFilter(e)}/> */}
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/services" >Services</a></li>
          <li><a href="/" >Books</a></li>
          <li><a href="/addbook" >Addbooks</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Nav