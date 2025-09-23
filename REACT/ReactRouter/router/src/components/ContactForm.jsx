import React from 'react'

const ContactForm = () => {
  return (
      <div>
          <form action="">
              <input type="text" placeholder='name'/>
              <input type="text" placeholder='email' />
              <br />
              <textarea name="message" id="" placeholder='message'></textarea>
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default ContactForm