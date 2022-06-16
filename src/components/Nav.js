import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt , FaProjectDiagram ,FaMailBulk} from 'react-icons/fa';
import {AppContext} from './context';




function Nav() {
  const {navbar} = useContext(AppContext)

  
  return (
      <nav className={navbar?'floating-nav active':'floating-nav'}>
        <Link to='/profile-page' title='Home'><FaUserAlt /></Link>
        <Link to='/profile-page/portfolio' title='Portfolio'><FaProjectDiagram /></Link>
        <Link to='/profile-page/contact' title='Contacts'><FaMailBulk /></Link>
      </nav>
  )
}

export default Nav