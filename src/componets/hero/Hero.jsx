import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '/heroman.png';
import './hero.css';

export const Hero = () => {
  return (
    <div className="hero-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Column: Text and Buttons */}
        <div className="col-lg-6 col-md-12 text-start">
          <h1>Your destination is our passion.</h1>
          <p className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-danger">Track Parcel</button>
            <button className="btn btn-outline-danger">Send Parcel</button>
          </div>

          {/* Stats Section */}
          <div className="stats d-flex mt-4">
            <div className="stat-item">
              <h5>100K</h5>
              <span>Parcels Delivered</span>
            </div>
            <div className="stat-item">
              <h5>60K</h5>
              <span>Customers</span>
            </div>
            <div className="stat-item">
              <h5>15K</h5>
              <span>Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src={heroImage} alt="Delivery Hero" className="img-fluid hero-img" />
        </div>
      </div>
    </div>
  )
}
