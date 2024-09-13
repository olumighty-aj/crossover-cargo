import './quote.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import calc from '/claculator.png';

export const Quote = () => {
  return (
    <section className="quote-section d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="text-light">Get an instant quote!</h2>
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
            </p>
            <button className="btn calcu">Calculate Price</button>
          </div>
          
          {/* Right Image Section */}
          <div className="col-md-6 text-center">
            {/* Image to be replaced */}
            <img src={calc} alt="Calculator" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
