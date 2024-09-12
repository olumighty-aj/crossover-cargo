import lady from '/lady.png';
import './chooseus.css';

export const ChooseUs = () => {
  return (
    <div className="container my-5">
    {/* Why Choose Us Section */}
    <div className="text-center mb-5">
      <h2 className='whyy'>Why choose Us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
    </div>
    
    <div className="row text-center">
      <div className="col-md-3">
        <div className="card h-100 border-0">
          <div className="card-body">
            <img src="/otp.png" alt="OTP" className="img-fluid mb-3" />
            <h5 className='top'>Delivery confirmation with OTP</h5>
            <p>Lorem Ipsum has been the industry standard dummy text ever</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 border-0">
          <div className="card-body">
            <img src="/fast.png" alt="Fastest Service" className="img-fluid mb-3" />
            <h5 className='top'>Fastest Service</h5>
            <p>Lorem Ipsum has been the industry standard dummy text ever</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 border-0">
          <div className="card-body">
            <img src="/track.png" alt="Full Tracking" className="img-fluid mb-3" />
            <h5 className='top'>Full Tracking</h5>
            <p>Lorem Ipsum has been the industry standard dummy text ever</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 border-0">
          <div className="card-body">
            <img src="/money.png" alt="Cash on Delivery" className="img-fluid mb-3" />
            <h5 className='top'>Cash on Delivery</h5>
            <p>Lorem Ipsum has been the industry standard dummy text ever</p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={lady} alt="Customer Service" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className='what'>What people say</h2>
          <div className="card border-0">
            <div className="card-body">
              <p>
                Fantastic service! I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable.
              </p>
              <h6 className="font-weight-bold name">Yves Tanguy</h6>
              <p className="text-muted">Chief Executive, DLF</p>
              <p className="text-warning">★★★★★</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
