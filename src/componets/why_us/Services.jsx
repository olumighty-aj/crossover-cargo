import './services.css';
import serviceImage from '/service.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBox, faShoppingCart, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
  return (
    <div className="services-section container py-5">
    <div className="row ">
      {/* Left Column: Image */}
      <div className="col-lg-6 col-md-12  mb-4 mb-lg-0">
      <h2 className='prov'>We provide services that you can rely on</h2>
        <p className="lead mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
        </p>
        <img src={serviceImage} alt="Service Illustration" className="img-fluid" />
      </div>

      {/* Right Column: Services List */}
      <div className="col-lg-6 col-md-12">
        
        
        {/* Service Items */}
        <div className="service-item d-flex mb-4">
        <FontAwesomeIcon icon={faClipboardCheck} size="2x" className='icon' />
          <div className='top-sub'>
            <h5 className='top-header'>Booking</h5>
          </div>
          
        </div>
        <p className='top-bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#more">More...</a></p>

        <div className="service-item d-flex mb-4">
        <FontAwesomeIcon icon={faTruck} size="2x" className='icon' />
          <div className='top-sub'>
            <h5 className='top-headerr'>Transportation</h5>
           
          </div>
        </div>
        <p className='top-bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#more">More...</a></p>

        <div className="service-item d-flex mb-4">
        <FontAwesomeIcon icon={faBox} size="2x"  className='icon' />
          <div className='top-sub'>
            <h5 className='top-header'>Packing</h5>
            
          </div>
        </div>
        <p className='top-bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#more">More...</a></p>

        <div className="service-item d-flex mb-4">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" className='icon' />
          <div className='top-sub'>
            <h5 className='top-header'>Delivery</h5>
           
          </div>
        </div>
        <p className='top-bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#more">More...</a></p>
      </div>
    </div>
  </div>
  )
}
