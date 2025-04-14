import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="scrollFade row footerOuterWrapper border-top bg-light p-0 m-0">
<div className="p-0">
<div className="container">
    <footer className="py-5 pb-0 footerWrapper">
      <div className="row">
        <div className="col-12 col-md-2 mb-3">
          <h5>Doloremque cupiditate</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Similique</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Cupiditate</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Impedit</Link></li>
          </ul>
        </div>
  
        <div className="col-12 col-md-2 mb-3">
          <h5>Odio sapiente</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Voluptate</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Aspernatur nemo</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Praesentium</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Enim</Link></li>
          </ul>
        </div>
  
        <div className="col-12 col-md-2 mb-3">
          <h5>Adipisicing</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Quidem natus</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Labore</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Molestias</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Reiciendis</Link></li>
          </ul>
        </div>
  
        <div className="col-12 col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 ">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control border-primary rounded-0" placeholder="Email address" />
              <button className="btn btn-primary text-white rounded-0" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 pb-0 my-4 mb-0 border-top">
        <p>©2025 BROOK, Inc. All rights reserved.</p>
      </div>
    </footer>
</div>
</div>
</div>
  )
}

export default Footer