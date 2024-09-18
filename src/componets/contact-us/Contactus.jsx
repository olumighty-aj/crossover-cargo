import  { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

export const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_swbd5pp', 'template_sdr2cj8', form.current, {
            publicKey: 'ndGlGqc9lk3xc1DvA',
        })
          .then((result) => {
              console.log(result.text);
              alert("Message sent successfully!");
          }, (error) => {
              console.log(error.text);
              alert("Failed to send the message, please try again.");
          });
    
        e.target.reset();  
      };

  return (
    <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2> <span className="yellow">Contact Us</span></h2>
                     <span> Request a call back</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <form id="contac_form" className="contac_form" ref={form} onSubmit={sendEmail}>
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contac_control" placeholder=" Full Name" type="type" name="Name" required /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contac_control" placeholder="Phone Number  " type="type" name="Phone" required />                          
                        </div>
                        <div className="col-md-12">
                           <input className="contac_control" placeholder="Email Address" type="type" name="Email" required />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" ></textarea>
                        </div>
                        <div className="col-md-12">
                           <button type="submit" className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            
         </div>
      </div>
  )
}
