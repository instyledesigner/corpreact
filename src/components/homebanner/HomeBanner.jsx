import React from 'react';
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="">
      <div className="container-fluid g-0">
        <img style={{maxHeight:'400px',objectFit:'cover'}} className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7" src="https://www.brookfield.com/sites/default/files/styles/background_image_xl/public/images/2024-02/desktop_homepage_image-2880x1714.jpg?itok=ozXuJ1PU" srcSet="" sizes="" width="" height="" alt="" />
    </div>


    <div className="container p-5 pb-0 bg-body position-relative " style={{marginTop:'-100px',}}>
        <div className="row">
            <div className="col-md-12 text-center align-self-center">
                <div className="lc-block border-lg-end border-2 ">
                    <div >
                        <p className="display-6 text-secondary">A leading global investment firm</p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="lc-block ">
                    <div >
                        <p className="display-4">Creating long-term, sustainable wealth</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-9 offset-md-1">
                <div className="lc-block mt-5">
                    <div >
                        <p className="lead text-secondary">We invest in high-quality businesses that form the backbone of the global economy, investing alongside our clients in nearly everything we do.</p>
                        <p className="lead text-secondary">
                        We are a leading global investment firm, investing on behalf of institutions and individuals around the world. Our success is based on our proven investment and operational expertise—and at the heart of it all is the Brookfield Ecosystem. The insights we gather from our scale, expertise and global reach enable each group within Brookfield to benefit from being part of the whole.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HomeBanner;
