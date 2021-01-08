import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/NavBar.css';

const NavBar = ({ cartItemNumber }) => (
  <header className='main-navigation'>
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart ({cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
