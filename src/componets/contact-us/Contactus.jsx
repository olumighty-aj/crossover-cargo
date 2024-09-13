import './contact.css';

export const Contactus = () => {
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
                  <form id="contac_form" className="contac_form" action="" method="post">
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
                           <textarea className="textarea" placeholder="Message" type="type" >Message </textarea>
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
