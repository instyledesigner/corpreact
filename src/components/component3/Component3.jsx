import React from 'react';
import { Link } from "react-router-dom";

const Component3 = () => {
  return (
    <div className="container-fluid text-center p-0 py-4 pb-0 py-md-6">
        <div className="lc-block card border-0 text-center rounded-0 p-4 p-lg-6" 
        style={{background:'url(https://cdn.livecanvas.com/media/backgrounds/fffuelco/ffflux.svg) center / cover no-repeat'}}>
            <div className="row card-body mb-3 mb-lg-4">
                <div className="col-xl-11 col-xxl-9 mx-auto">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <p className="text-white">JOIN OUR COMMUNITY</p>
                        </div>
                    </div>
                    <div className="lc-block text-white">
                        <h3 editable="inline" className="fw-bold display-6">We are <span className="lc-block position-relative">trusted <img className="position-absolute top-100 start-0 mt-n1 img-fluid" src="https://cdn.livecanvas.com/media/underline/white_underline1.svg" /></span> by over 5000+ clients. Join them now and grow your business.</h3>
                    </div>
                </div>
            </div>
            <div className="lc-block">
                <Link className="btn btn-primary text-white rounded-0 btn-lg" to="/" role="button">Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Component3