import React from 'react';
import { FaFacebookSquare ,FaTwitterSquare ,FaGithub ,FaLinkedin} from 'react-icons/fa';


const thisYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className='bg-primary'>
        <div className='socials'>
            <a className='icon-facebook icon' href='https://www.facebook.com/omar.elkanzy'><FaFacebookSquare /></a>
            <a className='icon-twitter icon' href='https://twitter.com/Omar_Farid95'><FaTwitterSquare /></a>
            <a className='icon-github icon' href='https://github.com/omarfarids'><FaGithub /></a>
            <a className='icon-linkedin icon' href='https://www.linkedin.com/in/omar-farid-270436144/'><FaLinkedin /></a>
        </div>
        <p>&#169; {thisYear} All rights reserved.</p>
    </footer>
  )
}

export default Footer