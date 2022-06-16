import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import Nav from './Nav';

function Contact() {
  return (
    
    <div className='contact'>
        <Nav/>
        <h2>Contact Me</h2>
        <div className='contact-options'>
            <div className='option'>
                <HiOutlineMail />
                <h4>Email</h4>
                <h5>Omar.farid007@gmail.com</h5>
                <a className='btn btn-primary' href='mailto:omar.farid007@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
            </div>
            <div className='option'>
                <BsMessenger />
                <h4>Messenger</h4>
                <h5>Omar farid</h5>
                <a className='btn btn-primary' href='https://m.me/omar.elkanzy' target='_blank' rel='noreferrer'>Send a message</a>
            </div>
            <div className='option'>
                <BsWhatsapp />
                <h4>whatsapp</h4>
                <h5>+201013589948</h5>
                <a className='btn btn-primary' href='https://wa.me/201013589948' target='_blank' rel='noreferrer'>Send a message</a>
            </div>
        </div>
    </div>
  )
}

export default Contact