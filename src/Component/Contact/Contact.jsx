import React from 'react'
import ContactCard from './ContactCard'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  //send form data
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then((result) => {
          e.target.reset();
          alert("Message Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div
      id='contact'
       className='dark:text-white max-w-[1080px] overflow-x-hidden  mx-auto  mt-16 overflow-y-hidden'>
        <h1 className='text-center text-4xl font-semibold' >Contact</h1>
        <p className='text-center opacity-50 mt-2'>Let's discuss your Queries !</p>
        <div className='flex gap-5 p-2 flex-wrap mt-6' data-aos="zoom-out">
            {/* left */}
            <div className='flex flex-col gap-3'>
                
                <ContactCard name="Phone Number" value="+91-8825915327" href="tel:+918825915327" icon="fa-solid fa-phone"/>
                <ContactCard name="Email Address" value="md.thalib.dev@gmail.com" href="mailto:md.thalib.dev@gmailcom" icon="fa-solid fa-envelope" />
                <ContactCard name="Address" value="Chennai, Tamil Nadu  " href="https://maps.app.goo.gl/sMACwiocZxpykFAf8" icon="fa-solid fa-location-dot"/>
            </div>

            {/* right */}
            
              <form ref={form} onSubmit={sendEmail} className='flex  flex-wrap p-3 lg:p-5 dark:bg-gray-800 bg-white flex-1 gap-4 rounded-xl'>
                <div className='relative w-full lg:w-[48%]  '>
                  <i className="fa-solid fa-user  absolute left-3 top-5 transform -translate-y-1/2"></i>
                  <input type="text" name="user_name" placeholder='Name...'  className='bg-transparent border-2 border-gray-600  rounded-md  pl-9 py-2 w-full  '/>
                </div>
                <div className='relative w-full lg:w-[49%]  '>
                  <i className="fa-solid fa-envelope  absolute left-3 top-5 transform -translate-y-1/2"></i>
                  <input type="text" name="user_email" placeholder='Email...'  className='bg-transparent border-2 border-gray-600  rounded-md  pl-9 py-2 w-full  '/>
                </div>
                <div className='relative w-full h-[30%] lg:h-[50%]'>
                  <i className="fa-brands fa-rocketchat  absolute left-3 top-5 transform -translate-y-1/2"></i>
                  <textarea placeholder='Message...' name="message" className='w-[100%] bg-transparent border-2 border-gray-600 rounded-md py-1 h-full  pl-9 '/>
                </div>
                  <input type='submit' value={"Send"} className='bg-cyan-500 hover:bg-cyan-600 px-3  py-2 rounded-md cursor-pointer'/>
              </form>
        </div>
      </div>
    </>
  )
}

export default Contact