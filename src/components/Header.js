import React , {useState,useRef} from 'react';
import CV from '../assets/Omar_Farid_CV.pdf';
import emailjs from 'emailjs-com';





function Header({image}) {
    const [contacts , setContacts] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0gpglvs', 'template_x7w5jij', form.current, 'BYueHr8xvJcVZ2KCe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <header>
        <div className='header description'>
            <img src={image} alt='description-img img' className='rounded-circle border border-5 border-primary' />
            <div className='description-info info'>
                <h1><span className='capital-letter'>O</span>mar Farid</h1>
                <span className='job-title'>Frontend-developer at Beacon</span>
                <p>Hi, I'm Omar from Egypt. I enjoy building everything from small business sites 
                    to rich interactive web apps if you are a business seeking a web presence or an 
                    employee looking to hire, you can get in touch through CONTACT button below.
                </p>
                <div id='contacts' className='buttons'>
                    <a className="btn btn-primary rounded-pill" href={CV} download>Download CV</a>
                    <button className="btn btn-primary rounded-pill" onClick={()=>setContacts(!contacts)}>Contact</button>
                </div>
                {contacts && <div className='contacts mt-3'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input className='rounded-pill' type='text' name='name' placeholder='Your Full Name' required />
                            <input className='rounded-pill' type='text' name='email' placeholder='Your Email' required />
                            <textarea className='rounded' name='message' rows='7' placeholder='message' required />
                            <button type='submit' className='btn btn-primary rounded-pill'>Send Messenger</button>
                        </form>
                    </div>}
            </div>
        </div>
    </header>
  )
}

export default Header