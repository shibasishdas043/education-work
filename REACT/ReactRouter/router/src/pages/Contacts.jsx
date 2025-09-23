import React from 'react'
import { useNavigate } from 'react-router-dom';


const Contacts = () => {
    const navigate = useNavigate();

  return (
    <div>
          <h1>Contacts</h1>
          <div className='contact-button'>
              <button onClick={()=>navigate('ContactInfo')}>
                  Contact Info
              </button>
              <button onClick={()=>navigate('ContactForm')}>
                  Contact Form
              </button>
          </div>
    </div>
  );
}

export default Contacts